"use client";
import styled, { keyframes } from "styled-components";
import {
  animationDurationCSS,
  clipPaths,
  colors,
  curves,
  sizes,
} from "@/entities";
import { rem } from "polished";

const fall = keyframes`
  0% {
      opacity: 0;
      transform: translateX(0) rotate(0);
    top: 0;
  }
    10% {
        opacity: 1;
    }
    25% {
        transform: translateX(-${sizes.s16.rem}) rotate(90deg);
    }
    50% {
        transform: translateX(0) rotate(180deg);
    }
    75% {
        transform: translateX(${sizes.s16.rem}) rotate(270deg);
    }
    90% {
        opacity: 1;
    }
  100% {
        opacity: 0;
        top: 100%;
        transform: rotate(360deg) translateX(0);
  }
`;

export const Flake = styled.span`
  animation: ${fall} infinite ${curves.linear};
  animation-delay: calc(var(--duration) * var(--delay) * 1s);
  animation-duration: calc(var(--flakeDuration) * 1s);
  aspect-ratio: 1;
  background: ${colors.whiteGhost};
  clip-path: ${clipPaths.snowflake};
  left: calc(
    (100% - var(--size)) * ((var(--index) - 1) / var(--numberOfFlakes))
  );
  opacity: 0;
  position: absolute;
  transform-origin: center center;
  width: var(--size);

  @media (prefers-reduced-motion: reduce) {
    animation-delay: calc(var(--duration) * var(--delay) * -1s);
    animation-play-state: paused;
  }
`;

export const Root = styled.div`
  overflow: hidden;
  position: relative;
`;
