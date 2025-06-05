import mysql, { ConnectionOptions, RowDataPacket } from "mysql2/promise";
import { ErrorText, Heading, Paragraph } from "@/entities";
import { GraphEdge, GraphNode } from "reagraph";
import styles from "./TrampolineMoveNetwork.module.scss";
import TrampolineMoveNetworkWrapper from "@/app/about-me/trampolining/components/TrampolineMoveNetwork/TrampolineMoveNetworkWrapper";

const connectionOptions: ConnectionOptions = {
  host: `${process.env.CANGAROOS_DB_HOST}`,
  user: `${process.env.CANGAROOS_DB_USER}`,
  password: `${process.env.CANGAROOS_DB_PASSWORD}`,
  database: `${process.env.CANGAROOS_DB_NAME}`,
};

const getMoveData = async () => {
  let nodes: GraphNode[] = [];
  let edges: GraphEdge[] = [];
  let error = "ok";
  try {
    const connection = await mysql.createConnection(connectionOptions);
    const [movesResults] = await connection.query<RowDataPacket[]>(
      "SELECT * FROM `VU_moves` WHERE id > 0 AND active = 1"
    );

    const [edgesResults] = await connection.query<RowDataPacket[]>(
      "SELECT * FROM `VU_moves_links` WHERE id > 0"
    );

    movesResults.forEach((row) => {
      const node: GraphNode = {
        id: `${row.id}`,
        label: row.title,
        subLabel: `${row.altnames}`,
        data: {
          qualification: `${row.coachlevelid}`,
          description: `${row.description}`,
          difficulty: parseFloat(row.tarif),
          difficultyPS: parseFloat(row.pstarif),
          fig: row.fig,
          altnames: row.altnames,
          coachleveltitle: row.coachleveltitle,
        },
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
  } catch (e) {
    error = `${e}`;
  }

  return { nodes, edges, error };
};

export default async function TrampolineMoveNetwork() {
  const { nodes, edges, error } = await getMoveData();
  return (
    <section className={styles.root}>
      <Heading level="h2">Move Network</Heading>
      <Paragraph>
        Over time I have created a move network graph that is a visual
        representation of trampoline moves and how they progress to more complex
        ones.
      </Paragraph>
      <Paragraph>
        Use the mouse or your touch controls to zoom in to see more detail and
        right click on a node to view information about the skill.
      </Paragraph>
      {nodes.length && edges.length ? (
        <TrampolineMoveNetworkWrapper nodes={nodes} edges={edges} />
      ) : (
        <ErrorText>Could not connect to move database: {error}</ErrorText>
      )}
    </section>
  );
}
