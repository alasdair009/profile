"use client";
import { HTMLAttributes } from "react";
import { Root } from "./styles";
import "aframe";
import { ForceGraph2D } from "react-force-graph";
import { LinkObject, NodeObject } from "force-graph";
import { colors } from "@/entities";
type ForceGraphProps = {
  nodes: NodeObject[];
  links: LinkObject[];
} & HTMLAttributes<HTMLDivElement>;

export function ForceGraph({ nodes, links, ...rest }: ForceGraphProps) {
  return (
    <Root data-testid={ForceGraph.name} {...rest}>
      <ForceGraph2D
        graphData={{ nodes: nodes, links: links }}
        linkColor={"color"}
        linkDirectionalParticles="value"
        linkDirectionalArrowLength={3}
        nodeColor={"qualification"}
      />
    </Root>
  );
}
