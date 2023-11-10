"use client";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import {colors, fontSizes, fontWeights, sizes} from "@/entities";
import { LinkVariant } from "./types";

const generatePolygonLine = (yOffset = 0) => {
  return `polygon(0 0, 30% ${yOffset * 0.9}%, 50% ${yOffset}%, 70% ${
    yOffset * 0.9
  }%, 100% 0, 100% 25%, 70% ${25 + yOffset * 0.9}%, 50% ${25 + yOffset}%, 30% ${
    25 + yOffset * 0.9
  }%, 0 25%)`;
};

const pressDown = keyframes`
  from {
    clip-path: ${generatePolygonLine(0)};
  }
  to {
    clip-path: ${generatePolygonLine(50)};
  }
`;

const release = keyframes`
  0% {
    clip-path: ${generatePolygonLine(50)};
  }
  60% {
    clip-path: ${generatePolygonLine(-30)};
  }
  80% {
    clip-path: ${generatePolygonLine(20)};
  }
  100% {
    clip-path: ${generatePolygonLine(0)};
  }
`;

export const Root = styled(Link)<{ $variant: LinkVariant }>`
  color: ${({ $variant }) =>
    $variant === "large" ? colors.greenGrass : colors.whiteGhost};
  font-size: ${({ $variant }) =>
    $variant === "large" ? fontSizes.large.rem : "inherit"};
  font-weight: ${fontWeights.bold};
  padding-bottom: ${({ $variant }) =>
    $variant === "large" ? sizes.s16.rem : sizes.s8.rem};
  position: relative;
  text-decoration: none;
  text-transform: ${({ $variant }) =>
    $variant === "large" ? "uppercase" : null};

  &:hover {
    filter: brightness(1.3);

    &::after {
      animation: ${pressDown} 0.1s;
      animation-fill-mode: forwards;
    }
  }

  &:visited,
  &:active {
    color: ${colors.greenGrass};
  }

  &::after {
    animation: ${release} 0.2s;
    animation-fill-mode: forwards;
    background: ${({ $variant }) =>
      $variant === "large" ? colors.whiteGhost : colors.greenGrass};
    bottom: 0;
    clip-path: ${() => generatePolygonLine()};
    content: "";
    height: ${({ $variant }) =>
      $variant === "large" ? sizes.s16.rem : sizes.s8.rem};
    left: 0;
    position: absolute;
    width: 100%;
  }
`;
