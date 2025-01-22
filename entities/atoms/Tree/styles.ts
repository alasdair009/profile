"use client";
import styled, { keyframes } from "styled-components";
import type { TreeWindDirection } from "./types";
import { animationDurationCSS, borderRadii } from "@/entities";

export const Root = styled.svg``;

export const sway = keyframes`
  0%, 100% {
    transform: translate(calc(var(--moveTo) * 1px)) skew(calc(var(--swayTo) * 1deg));
  }
  50% {
    transform: translate(calc((var(--moveTo) + var(--swayAmount)) * 1px)) skew(calc((var(--swayTo) - var(--swayAmount)) * 1deg));
  }
`;

const getLeavesTransform = ($windDirection: TreeWindDirection) => {
  switch ($windDirection) {
    case "left":
      return "translateX(-13px) skew(10deg)";
    case "right":
      return "translateX(13px) skew(-10deg)";
    default:
      return "none";
  }
};

export const Leaves = styled.path`
  animation: ${sway} ${animationDurationCSS(2)} infinite linear;
  stroke: #1a4a24;
  fill-rule: nonzero;
  transform: translateX(calc(var(--moveTo) * 1px))
    skew(calc(var(--swayTo) * 1deg));
  transition: transform 2s;
`;

export const Trunk = styled.rect`
  rx: ${borderRadii.r2};
  stroke: #2e1305;
`;
