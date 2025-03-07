"use client";
import styled, { keyframes } from "styled-components";
import { CSSProperties } from "react";
import { borderRadii, colors, sizes } from "@/entities";
import { Cloud as CloudEntity } from "../../atoms/Cloud";
import { rgba } from "polished";
import { Sun as SunEntity } from "@/entities/atoms/Sun";

const cloudMove = keyframes`
    0% {
        opacity: 0;
        top: 50%;
        transform: translateZ(1px) translate(-50%, -50%) scale(0.4);
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        top: 100%;
        transform: translateZ(1px) translate(var(--moveTo), -50%) scale(0.7);
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
      ${rgba(colors.whiteGhost, 0.5)} 45%,
      ${rgba(colors.whiteGhost, 0.5)} 80%,
      ${colors.whiteGhost}
    );
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export const Sun = styled(SunEntity)`
  left: 7%;
  position: absolute;
  top: 7%;
  width: 10%;
`;

export const Cloud = styled(CloudEntity)`
  animation: ${cloudMove} 5s infinite linear;
  position: absolute;
  height: 100%;
  top: 75%;
  transform: translateZ(1px) translate(-50%, -50%);
  width: 100%;
  will-change: transform, opacity, top;
`;
