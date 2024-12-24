"use client";

import styled, { css, keyframes } from "styled-components";
import {
  animationDurationCSS,
  borderRadii,
  colors,
  curves,
  device,
  fontSizes,
  globalContentMaxWidth,
  sizes,
} from "@/entities";
import { rem, rgba } from "polished";
import { CSSProperties } from "react";
import amLogo from "../../assets/am.svg";

// https://codepen.io/Hornebom/pen/ZYzbgy

const baseRotate = keyframes`
    0% {
        transform:rotateY(0);
    }
    100% {
        transform:rotateY(400grad);
    }
`;

const rotating = (index: number) => keyframes`
    0% {
        transform: rotateZ(${index * 40}grad) rotateY(0);
    }
    100% {
        transform:rotateZ(${index * 40}grad) rotateY(400grad);
    }
`;

const generateAnim = (index: number) => {
  const time = 1.5 - (Math.random() * 30 - 30) / 10;
  const delay = index * -2;

  return css`
    animation: ${rotating(index)} ${animationDurationCSS(time)} ${delay}s
      ${curves.linear} infinite;

    &::before {
      animation: ${baseRotate} ${animationDurationCSS(time)} ${delay}s
        ${curves.linear} infinite reverse;
    }
  `;
};

export const Root = styled.div`
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
  padding: ${sizes.s64.rem} 0;
  position: relative;
`;

export const Stage = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  max-width: ${rem(480)};
  margin: 0 auto;
  perspective: 300px;
  width: 100%;
`;

export const Particle = styled.span<{
  $color: CSSProperties["backgroundColor"];
  $position: number;
  $content?: string;
}>`
  ${({ $position }) => generateAnim($position)};
  left: -16%;
  margin-top: -5%;
  padding-bottom: 10%;
  position: absolute;
  right: -16%;
  top: 50%;
  transform-style: preserve-3d;
  transition: animation-duration ${animationDurationCSS(1)}s;

  &::before {
    align-items: center;
    background-color: ${({ $color }) => $color};
    border-radius: ${borderRadii.round};
    bottom: 0;
    box-shadow:
      inset ${rem(5)} ${rem(5)} ${rem(10)} ${rgba(colors.whiteGhost, 0.2)},
      inset ${rem(-5)} ${rem(-5)} ${rem(10)} ${rgba(colors.whiteGhost, 0.2)};
    content: "${({ $content }) => ($content ? $content : "")}";
    display: flex;
    font-size: ${fontSizes.small.rem};
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 7.5%;
  }
`;

export const Core = styled.div`
  aspect-ratio: 1;
  background-image: radial-gradient(transparent 40%, ${colors.whiteGhost}),
    linear-gradient(
      ${rgba(colors.whiteGhost, 0.8)},
      ${rgba(colors.whiteGhost, 0.8)}
    ),
    radial-gradient(${colors.whiteGhost} 10%, transparent 50%);
  background-position:
    0 0,
    50% 50%,
    50% 50%;
  background-repeat: no-repeat;
  background-size:
    120% 120%,
    100% 100%,
    60% 60%;
  border-radius: ${borderRadii.round};
  box-shadow:
    ${rem(80)} ${rem(80)} ${sizes.s128.rem} rgba(0, 0, 0, 0.5),
    0 0 5rem ${rgba(colors.whiteGhost, 0.8)};
  margin: 0 auto;
  max-width: ${sizes.s192.rem};
  position: relative;
  transform-style: preserve-3d;
  width: 100%;

  @media (${device.medium}) {
    max-width: ${sizes.s256.rem};
  }

  &::before,
  &::after {
    border-radius: ${borderRadii.round};
    content: "";
    height: 100%;
    position: absolute;
    width: 100%;
  }

  &::before {
    background: radial-gradient(
      ${colors.greenGrass},
      ${rgba(colors.greenGrass, 0.15)}
    );
    mask: url(${amLogo.src}) no-repeat center;
    opacity: 0.1;
  }

  &::after {
    background: url(${amLogo.src}) no-repeat center;
    opacity: 0;
    transition: opacity ${animationDurationCSS(0.5)}s;

    @media (prefers-reduced-motion) {
      opacity: 1;
    }
  }

  &:hover {
    &::after {
      opacity: 1;
    }

    ${Particle} {
      animation-duration: ${animationDurationCSS(10)}s;
    }
  }
`;
