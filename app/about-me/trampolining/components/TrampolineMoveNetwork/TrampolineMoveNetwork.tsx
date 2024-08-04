import mysql, { ConnectionOptions, RowDataPacket } from "mysql2/promise";
import { Root } from "./styles";
import { ErrorText, Heading, Paragraph } from "@/entities";
import Chart from "./Chart/Chart";
import { GraphEdge, GraphNode } from "reagraph";

const connectionOptions: ConnectionOptions = {
  host: `${process.env.CANGAROOS_DB_HOST}`,
  user: `${process.env.CANGAROOS_DB_USER}`,
  password: `${process.env.CANGAROOS_DB_PASSWORD}`,
  database: `${process.env.CANGAROOS_DB_NAME}`,
};

const getMoveData = async () => {
  let nodes: GraphNode[] = [];
  let edges: GraphEdge[] = [];
  try {
    const connection = await mysql.createConnection(connectionOptions);
    const [movesResults, movesFields] = await connection.query<RowDataPacket[]>(
      "SELECT * FROM `trampmoves` WHERE id > 0 AND active = 1"
    );

    const [edgesResults, edgesFields] = await connection.query<RowDataPacket[]>(
      "SELECT * FROM `moves_links` WHERE id > 0"
    );

    movesResults.forEach((row) => {
      const node: GraphNode = {
        id: `${row.id}`,
        label: row.title,
      };
      nodes.push(node);
    });

    edgesResults.forEach((row) => {
      const edge: GraphEdge = {
        id: `${row.move2}->${row.move1}`,
        source: `${row.move2}`,
        target: `${row.move1}`,
      };
      edges.push(edge);
    });
  } catch {}

  return { nodes, edges };
};

export default async function TrampolineMoveNetwork() {
  const { nodes, edges } = await getMoveData();
  return (
    <Root>
      <Heading level="h2">Move Network</Heading>
      <Paragraph>
        Over time I have created a move network graph that is a visual
        representation of trampoline moves and how they progress to more complex
        ones.
      </Paragraph>
      <Paragraph>
        Use the mouse or your touch controls to zoom in to see more detail.
      </Paragraph>
      {nodes.length && edges.length ? (
        <Chart nodes={nodes} edges={edges} />
      ) : (
        <ErrorText>Could not connect to move database</ErrorText>
      )}
    </Root>
  );
}
