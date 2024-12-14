"use client";
import styled, { keyframes } from "styled-components";
import { animationDurationCSS, colors, curves, sizes } from "@/entities";
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
  clip-path: polygon(
    52% 20%,
    52% 27%,
    56% 24%,
    59% 27%,
    52% 33%,
    52% 42%,
    60% 38%,
    62% 29%,
    66% 30%,
    65% 35%,
    71% 31%,
    73% 35%,
    67% 39%,
    72% 40%,
    71% 44%,
    62% 42%,
    54% 46%,
    62% 50%,
    71% 48%,
    72% 52%,
    68% 53%,
    73% 56%,
    71% 60%,
    65% 57%,
    66% 62%,
    62% 63%,
    59% 54%,
    52% 50%,
    52% 58%,
    59% 65%,
    56% 68%,
    52% 65%,
    52% 71%,
    48% 71%,
    48% 65%,
    44% 68%,
    41% 65%,
    48% 58%,
    48% 50%,
    40% 54%,
    38% 63%,
    34% 62%,
    35% 57%,
    29% 61%,
    27% 57%,
    33% 53%,
    28% 52%,
    29% 48%,
    39% 50%,
    45% 46%,
    38% 42%,
    29% 44%,
    28% 40%,
    33% 38%,
    27% 35%,
    29% 31%,
    35% 35%,
    34% 30%,
    38% 29%,
    40% 38%,
    48% 42%,
    48% 33%,
    41% 27%,
    44% 24%,
    48% 27%,
    48% 20%
  );
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
