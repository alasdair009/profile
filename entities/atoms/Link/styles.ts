"use client";
import Link from "next/link";
import styled from "styled-components";
import { colors } from "../../design-tokens/colors";
import { fontSizes, fontWeights } from "../../design-tokens/typography";
import { sizes } from "../../design-tokens/dimensions";
import { rem } from "polished";
import { LinkVariant } from "./types";

const generatePolygonLine = (yOffset = 0) => {
  return `polygon(0 0, 30% ${yOffset * 0.9}%, 50% ${yOffset}%, 70% ${
    yOffset * 0.9
  }%, 100% 0, 100% 25%, 70% ${25 + yOffset * 0.9}%, 50% ${25 + yOffset}%, 30% ${
    25 + yOffset * 0.9
  }%, 0 25%)`;
};
export const Root = styled(Link)<{ $variant: LinkVariant }>`
  color: ${({ $variant }) =>
    $variant === "large" ? colors.greenGrass : colors.whiteGhost};
  font-size: ${({ $variant }) =>
    $variant === "large" ? fontSizes.large.rem : "inherit"};
  font-weight: ${fontWeights.bold};
  position: relative;
  text-decoration: none;
  text-transform: ${({ $variant }) =>
    $variant === "large" ? "uppercase" : null};

  &:hover {
    filter: brightness(1.3);

    &::after {
      clip-path: ${() => generatePolygonLine(50)};
    }
  }

  &:visited,
  &:active {
    color: ${colors.greenGrass};
  }

  &::after {
    background: ${({ $variant }) =>
      $variant === "large" ? colors.whiteGhost : colors.greenGrass};
    bottom: -${({ $variant }) => ($variant === "large" ? rem(24) : rem(6))};
    clip-path: ${() => generatePolygonLine()};
    content: "";
    height: ${({ $variant }) =>
      $variant === "large" ? sizes.s16.rem : sizes.s8.rem};
    left: 0;
    position: absolute;
    transition: clip-path 0.1s;
    width: 100%;
  }
`;
