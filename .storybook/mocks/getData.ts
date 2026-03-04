import type { GraphEdge, GraphNode } from "reagraph";

export const getMoveData = async (): Promise<{
  nodes: GraphNode[];
  edges: GraphEdge[];
  error: string;
}> => {
  return {
    nodes: [],
    edges: [],
    error: "Storybook: getMoveData stubbed",
  };
};
