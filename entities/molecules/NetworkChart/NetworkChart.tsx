"use client";
import {
  GraphCanvas,
  GraphEdge,
  GraphNode,
  Theme,
  darkTheme,
  GraphSceneProps,
} from "reagraph";
import {
  Button,
  colors,
  Heading,
  Paragraph,
  sizes,
  UnorderedList,
} from "@/entities";
import { HTMLAttributes, ReactNode } from "react";
import { darken } from "polished";
import { Root } from "./styles";

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
  return (
    <Root {...rest}>
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
          <div
            style={{
              background: colors.greyDark,
              boxShadow: `0 0 3px 3px ${colors.blackEvil}`,
              maxWidth: "100vw",
              padding: `${sizes.s56.rem} ${sizes.s16.rem} ${sizes.s16.rem}`,
              position: "relative",
              width: sizes.s512.rem,
            }}
          >
            <Button
              onClick={onClose}
              style={{
                position: "absolute",
                right: sizes.s8.rem,
                top: sizes.s8.rem,
              }}
              type="button"
            >
              X
            </Button>
            <Heading level="h6">{data.label}</Heading>
            <Paragraph>{data.data.description}</Paragraph>
            <UnorderedList>
              <li>Difficulty: {data.data.difficulty}</li>
              {data.data.difficultyPS &&
                data.data.difficultyPS > 0 &&
                data.data.difficultyPS !== data.data.difficulty && (
                  <li>Difficulty (P/S): {data.data.difficulty}</li>
                )}
            </UnorderedList>
          </div>
        )}
      />
    </Root>
  );
}
