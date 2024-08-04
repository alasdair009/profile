"use client";
import { GraphCanvas, GraphEdge, GraphNode, Theme, darkTheme } from "reagraph";
import { colors, sizes } from "@/entities";
import { HTMLAttributes } from "react";
import { darken, rem } from "polished";
import { useSearchParams } from "next/navigation";

type ChartProps = {
  nodes: GraphNode[];
  edges: GraphEdge[];
} & HTMLAttributes<HTMLDivElement>;

const chartTheme: Theme = {
  ...darkTheme,
  canvas: { background: colors.blackEvil },
  node: {
    ...darkTheme.node,
    fill: colors.greenGrass,
    activeFill: darken(0.05, colors.greenGrass),
    label: {
      color: colors.whiteGhost,
      stroke: colors.blackEvil,
      activeColor: colors.whiteGhost,
    },
  },
  edge: {
    ...darkTheme.edge,
    fill: colors.greyLight,
    activeFill: colors.whiteGhost,
  },
};

export default function Chart({ nodes, edges, ...rest }: ChartProps) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  return (
    <div
      style={{
        border: `${rem(1)} solid ${colors.greenGrass}`,
        minHeight: sizes.s1024.rem,
        maxHeight: "100vh",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
      {...rest}
    >
      <GraphCanvas
        nodes={nodes}
        edges={edges}
        theme={chartTheme}
        layoutType="treeTd3d"
      />
    </div>
  );
}
