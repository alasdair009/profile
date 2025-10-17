"use server";

import mysql, { ConnectionOptions, RowDataPacket } from "mysql2/promise";
import { GraphEdge, GraphNode } from "reagraph";

export const getMoveData = async (connectionOptions: ConnectionOptions) => {
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
