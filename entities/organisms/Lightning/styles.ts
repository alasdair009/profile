"use client";
import styled, { keyframes } from "styled-components";
import {
  colors,
  globalContentMaxWidth,
  globalDecorationMaxWidth,
  sizes,
} from "@/entities";
import { rem, rgba } from "polished";
import Image from "next/image";

const rain = keyframes`
    from {
        background-position: 0 0;
    }

    to {
        background-position: -20% -100%;
    }
`;

const strikeAnimation = keyframes`
    0%, 49%, 55%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
`;
const strikeGlow = keyframes`
    0%, 53%, 73%, 100% {
        filter: brightness(1);
    }
    54% {
        filter: brightness(3);
    }
`;

export const Root = styled.section`
  position: relative;
`;

export const Inner = styled.div<{ $rainSpeedDuration: number }>`
  display: flex;
  height: 100vh;
  margin: 0 auto;
  max-width: ${rem(globalDecorationMaxWidth)};
  overflow: hidden;
  position: relative;
  width: 100%;

  &::before {
    animation: ${rain} ${({ $rainSpeedDuration }) => $rainSpeedDuration}s linear
      infinite;

    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: rotate(180deg);
    width: 100%;
    z-index: 1;
  }
`;

export const RainCanvasWrapper = styled.div`
  height: 100%;
  min-height: ${sizes.s128.rem};
  position: absolute;
  width: 100%;
`;

export const RainCanvas = styled.canvas`
  height: 100%;
  position: absolute;
  width: 100%;
`;

export const Background = styled(Image)<{ $frequency: number }>`
  animation: ${strikeGlow} ${({ $frequency }) => $frequency}s linear infinite;
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Strike = styled(Image)<{ $frequency: number }>`
  animation: ${strikeAnimation} ${({ $frequency }) => $frequency}s linear
    infinite;
  height: 100%;
  left: 0;
  object-fit: cover;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  background: linear-gradient(
    to left,
    transparent,
    ${rgba(colors.blackEvil, 0.2)},
    transparent
  );
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
  overflow: hidden;
  padding: ${sizes.s8.rem};
  width: 100%;
  z-index: 1;
`;
