"use client";
import styled from "styled-components";
import { rem } from "polished";
import {
  colors,
  headingSizes,
  HeadingTypes,
  globalTextMaxWidth,
  sizes,
} from "@/entities";
import { Property } from "csstype";
import {lineClamp} from "@/lib/line-clamp";
import {lineHeights} from "@/entities/design-tokens/typography/typography";

export const Root = styled.h1<{
  $color: Property.Color;
  $level: HeadingTypes;
  $align: Property.TextAlign;
  $textShadow: boolean;
  $lines: number | undefined;
}>`
  color: ${({ $color }) => $color};
  font-size: ${({ $level }) => headingSizes[$level]};
  margin: 0 auto ${sizes.s24.rem};
  max-width: ${rem(globalTextMaxWidth)};
  padding-bottom: ${({ $level }) => ($level === "h1" ? sizes.s8.rem : 0)};
  position: relative;
  text-align: ${({ $align }) => $align};
  text-shadow: ${({ $textShadow }) =>
    $textShadow ? `0 0 ${rem(4)} ${colors.blackEvil}` : "none"};
  width: fit-content;
  ${({$level, $lines}) => lineClamp(`${lineHeights[$level]}`, $lines)}

  &::after {
    background: ${colors.greenGrass};
    bottom: 0;
    content: "";
    display: ${({ $level }) =>
      $level === "h1" || $level === "h2" ? "block" : "none"};
    height: ${rem(3)};
    left: 0;
    position: absolute;
    transform: rotate(-2deg);
    width: 100%;
  }
`;
