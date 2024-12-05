"use client";
import {
  GraphCanvas,
  GraphEdge,
  GraphNode,
  Theme,
  darkTheme,
  GraphSceneProps,
} from "reagraph";
import { colors } from "@/entities";
import { HTMLAttributes, ReactNode, useEffect, useState } from "react";
import { darken } from "polished";
import { Root } from "./styles";
import { ContextMenu } from "./ContextMenu";
import { useMounted } from "@/lib/useMounted";

type NetworkChartProps = {
  /**
   * Entries into the chart.
   */
  nodes: GraphNode[];
  /**
   * Lines connecting entries on the chart.
   */
  edges: GraphEdge[];
  /**
   * Action to occur when a node is clicked.
   */
  onNodeClick?: GraphSceneProps["onNodeClick"];
  /**
   * Menu to display when a node is clicked.
   */
  contextMenu?: ReactNode;
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

export function NetworkChart({
  nodes,
  edges,
  onNodeClick,
  contextMenu,
  ...rest
}: NetworkChartProps) {
  const mounted = useMounted();

  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      setIsBrowser(true);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  if (!isBrowser) {
    return <>Loading...</>;
  }
  return (
    <Root data-testid={NetworkChart.name} {...rest}>
      <GraphCanvas
        nodes={nodes}
        edges={edges}
        theme={chartTheme}
        layoutType="treeTd3d"
        onNodeClick={onNodeClick}
        sizingType="centrality"
        draggable={true}
        edgeInterpolation="curved"
        contextMenu={({ data, onClose }) => (
          <ContextMenu
            onClose={onClose}
            label={`${data.label}`}
            description={data.data.description}
            altnames={data.data.altnames}
            fig={data.data.fig}
            difficulty={data.data.difficulty}
            difficultyPS={data.data.difficultyPS}
            coachLevelTitle={data.data.coachleveltitle}
          />
        )}
      />
    </Root>
  );
}
