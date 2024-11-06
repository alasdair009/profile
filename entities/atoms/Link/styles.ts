"use client";
import Link from "next/link";
import { Link as ViewTransitionLink } from "next-view-transitions";
import styled, { css, keyframes } from "styled-components";
import { colors, fontSizes, fontWeights, IFrame, sizes } from "@/entities";
import { LinkVariant } from "./types";
import Image from "next/image";
import { lineHeights } from "@/entities/design-tokens/typography/typography";
import { lineClamp } from "@/lib/line-clamp";
import { rem } from "polished";

const generatePolygonLine = (yOffset = 0) => {
  return `polygon(0 0, 30% ${yOffset * 0.9}%, 50% ${yOffset}%, 70% ${yOffset * 0.9}%, 100% 0, 100% 25%, 70% ${25 + yOffset * 0.9}%, 50% ${25 + yOffset}%, 30% ${25 + yOffset * 0.9}%, 0 25%)`;
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

const getLinkStyles = (variant: LinkVariant, lines: number | undefined) => {
  return css`
    align-items: center;
    color: ${variant === "large" ? colors.greenGrass : colors.whiteGhost};
    display: inline-flex;
    font-size: ${variant === "large" ? fontSizes.large.rem : "inherit"};
    font-weight: ${fontWeights.bold};
    max-width: ${sizes.s512.rem};
    padding-bottom: ${variant === "large" ? `calc(${sizes.s16.rem} + 2px)` : 0};
    position: relative;
    text-decoration: none;
    text-transform: ${variant === "large" ? "uppercase" : null};
    word-break: break-word;
    ${lineClamp(`${lineHeights.p}`, lines)};

    &:hover {
      filter: brightness(1.3);

      &::after {
        animation: ${pressDown} 0.1s;
        animation-fill-mode: forwards;
      }

      ${HoverIFrameWrapper} {
        display: block;
      }
    }

    &:visited,
    &:active {
      color: ${variant === "large" ? colors.greenGrass : colors.whiteGhost};
    }

    &::after {
      animation: ${release} 0.2s;
      animation-fill-mode: forwards;
      background: ${colors.whiteGhost};
      bottom: -${variant === "large" ? 0 : rem(7)};
      clip-path: ${() => generatePolygonLine()};
      content: "";
      height: ${variant === "large" ? sizes.s16.rem : sizes.s8.rem};
      left: 0;
      position: absolute;
      width: 100%;
    }
  `;
};

export const Root = styled(ViewTransitionLink)<{
  $variant: LinkVariant;
  $lines: number | undefined;
}>`
  ${({ $variant, $lines }) => getLinkStyles($variant, $lines)}
`;

export const NewTabIcon = styled(Image)`
  display: inline-block;
  height: ${sizes.s16.rem};
  margin-left: ${sizes.s4.rem};
  width: ${sizes.s16.rem};
`;

export const HoverIFrameWrapper = styled.div`
  aspect-ratio: 16 / 9;
  background: ${colors.greyDark};
  border: ${sizes.s8.rem} solid ${colors.greyDark};
  box-shadow: 0 0 ${rem(2)} ${rem(2)} ${colors.blackEvil};
  display: none;
  height: calc(${sizes.s128.rem} + ${sizes.s16.rem});
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 0);
  transition: all 0.2s;
  user-select: none;
`;

export const HoverIFrame = styled(IFrame)`
  aspect-ratio: unset;
  height: calc(1000% - ${sizes.s16.rem});
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  width: calc(1000% - ${sizes.s16.rem});
`;
