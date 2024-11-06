"use client";
import styled, { css, keyframes } from "styled-components";
import { colors, globalDecorationMaxWidth, globalTextMaxWidth, sizes } from "@/entities";
import { rem, rgba } from "polished";
import Image from "next/image";

const orbitAnimation = keyframes`
    from {
        transform: rotate(0deg) translate(-50%, -50%)
    }
    to {
        transform: rotate(360deg) translate(-50%, -50%)
    }
`;

const randomPosition = () => {
  return (Math.floor(Math.random() * 100) - 50) * 2;
};
const generateParticles = (size: number, numberOfParticles: number) => {
  let particleString = "";
  for (let i = 0; i < numberOfParticles; i++) {
    particleString += `${randomPosition()}vw ${randomPosition()}vh ${rem(size * 5)} ${rem(size * 3)} ${rgba(255, 255, 255, 0.5)}${i < numberOfParticles - 1 ? "," : ""} `;
  }
  return particleString;
};

const generateBlockStyles = (particleBaseDuration: number, particleBlocks: number, numberOfParticles: number) => {
  let blockStyles = "";
  for (let i = 0; i < particleBlocks; i++) {
    blockStyles += `
          &:nth-child(${i}) {
            animation-delay: -${i * (particleBaseDuration / i)}s;
            animation-duration: ${particleBaseDuration + (particleBaseDuration / 2) * i}s;
            animation-direction: reverse;

            &::before {
              animation-direction: normal;
              box-shadow: ${generateParticles(i, numberOfParticles)};
            }
          }
        `;
  }

  return css`
    ${blockStyles}
  `;
};

export const Root = styled.div`
  align-items: center;
  background: linear-gradient(207deg, ${rgba(colors.greenGrass, 0.35)} 35%, transparent);
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  max-width: ${rem(globalDecorationMaxWidth)};
  padding: 20px;
  position: relative;
  width: 100%;

  &::before {
    background: linear-gradient(117deg, ${colors.blackEvil} 15%, transparent 50%, transparent 65%, ${colors.blackEvil} 95%);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export const Inner = styled.div`
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const EffectBox = styled.span<{
  $particleBaseDuration: number;
  $particleBlocks: number;
  $particlesPerPlate: number;
}>`
  animation: ${orbitAnimation} 21s infinite linear;
  height: 25%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 25%;

  &::before {
    animation: inherit;
    animation-direction: reverse;
    border-radius: 50%;
    content: "";
    height: 1px;
    left: 50%;
    opacity: 0.25;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${rem(1)};
  }

  ${({ $particleBaseDuration, $particleBlocks, $particlesPerPlate }) => generateBlockStyles($particleBaseDuration, $particleBlocks, $particlesPerPlate)}
`;

export const Content = styled.div`
  max-width: ${rem(globalTextMaxWidth)};
  position: relative;
  text-shadow: 0 0 ${sizes.s8.rem} ${colors.blackEvil};
  word-break: break-word;
  z-index: 1;
`;

export const Silhouette = styled(Image)`
  left: 50%;
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
  opacity: 0.025;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;
