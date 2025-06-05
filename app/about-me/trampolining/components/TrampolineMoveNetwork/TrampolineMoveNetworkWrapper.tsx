"use client";

import dynamic from "next/dynamic";
import type { GraphEdge, GraphNode } from "reagraph";

const NetworkChart = dynamic(
  () =>
    import("@/entities/molecules/NetworkChart/").then(
      (mod) => mod.NetworkChart
    ),
  {
    ssr: false,
  }
);

type TrampolineMoveNetworkWrapperProps = {
  /**
   * Entries into the chart.
   */
  nodes: GraphNode[];
  /**
   * Lines connecting entries on the chart.
   */
  edges: GraphEdge[];
};

export default function TrampolineMoveNetworkWrapper({
  nodes,
  edges,
}: TrampolineMoveNetworkWrapperProps) {
  return <NetworkChart nodes={nodes} edges={edges} />;
}
