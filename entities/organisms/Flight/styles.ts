"use client";
import styled, { keyframes } from "styled-components";
import { CSSProperties } from "react";
import { borderRadii, colors, sizes } from "@/entities";
import { Cloud as CloudEntity } from "../../atoms/Cloud";
import { rgba } from "polished";

const cloudMove = keyframes`
    0% {
      opacity: 0;
        top: 50%;
        transform: translate(-50%, -50%) scale(0.4);
    }
  10% {
    opacity: 1;
  }
  100% {
    opacity: 1;
      top: 100%;
      transform: translate(var(--moveTo), -50%) scale(0.7);
  }
`;

export const Root = styled.div<{ $skyColor: CSSProperties["backgroundColor"] }>`
  background-color: ${({ $skyColor }) => $skyColor};
  min-height: ${sizes.s512.rem};
  overflow: hidden;
  position: relative;

  &::before {
    background: linear-gradient(
      transparent 35%,
      ${rgba(colors.whiteGhost, 0.5)} 45%
    );
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &::after {
    aspect-ratio: 1;
    background: radial-gradient(
      closest-side circle at center,
      hsl(4 5% 100% / 100%) 0%,
      hsl(4 5% 100% / 100%) 15%,
      hsl(4 10% 70% / 70%) 30%,
      hsl(4 0% 50% / 30%) 55%,
      hsl(4 0% 10% / 5%) 75%,
      transparent 99%
    );
    border-radius: ${borderRadii.round};
    content: "";
    filter: blur(4px);
    left: 7%;
    position: absolute;
    top: 7%;
    width: 10%;
  }
`;

export const Cloud = styled(CloudEntity)<{
  $x: number;
  $delay: number;
}>`
  animation: ${cloudMove} 5s infinite linear;
  animation-delay: -${({ $delay }) => $delay}s;
  left: ${({ $x }) => $x}%;
  position: absolute;
  height: 100%;
  top: 75%;
  transform: translate(-50%, -50%);
  width: 100%;
`;
