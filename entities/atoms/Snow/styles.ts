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

const spreadFlakes = (
  flakeSize: number,
  numberOfFlakes: number,
  duration: number
) => {
  let particleSpread = "";
  for (let i = 0; i < numberOfFlakes; i++) {
    particleSpread += `
            &:nth-of-type(${i}) {
                animation-delay: calc(${duration}s * ${Math.random()});
                left: calc((100% - ${rem(flakeSize)}) * ${(i - 1) / numberOfFlakes});
                animation-duration: ${animationDurationCSS(Math.random() * (duration - duration * 0.5) + duration * 0.8)};
            }
        `;
  }

  return particleSpread;
};

export const Flake = styled.span`
  animation: ${fall} infinite ${curves.linear};
  aspect-ratio: 1;
  background: ${colors.whiteGhost};
  clip-path: ${clipPaths.snowflake};
  opacity: 0;
  position: absolute;
  transform-origin: center center;
`;

export const Root = styled.div<{
  $numberOfFlakes: number;
  $size: number;
  $duration: number;
}>`
  position: relative;

  ${Flake} {
    width: ${({ $size }) => rem($size)};
    ${({ $size, $numberOfFlakes, $duration }) =>
      spreadFlakes($size, $numberOfFlakes, $duration)}
  }
`;
