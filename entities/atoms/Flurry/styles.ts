"use client";
import styled, { css, keyframes } from "styled-components";
import {
  animationDurationCSS,
  colors,
  curves,
  globalDecorationMaxWidth,
  globalTextMaxWidth,
  sizes,
} from "@/entities";
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

export const Root = styled.div`
  align-items: center;
  background: linear-gradient(
    207deg,
    ${rgba(colors.greenGrass, 0.35)} 35%,
    transparent
  );
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  max-width: ${rem(globalDecorationMaxWidth)};
  padding: 20px;
  position: relative;
  width: 100%;

  &::before {
    background: linear-gradient(
      117deg,
      ${colors.blackEvil} 15%,
      transparent 50%,
      transparent 65%,
      ${colors.blackEvil} 95%
    );
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

export const EffectBox = styled.span`
  animation: ${orbitAnimation} ${animationDurationCSS(21)} infinite
    ${curves.linear};
  animation-direction: reverse;
  animation-duration: calc(
    (var(--particleBaseDuration) + (var(--particleBaseDuration) / 2)) *
      var(--index) * 1s
  );
  animation-delay: calc(
    (var(--index) * (var(--particleBaseDuration) / var(--index))) * -1s
  );
  height: 25%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 25%;

  &::before {
    animation: inherit;
    animation-direction: normal;
    border-radius: 50%;
    box-shadow: var(--shadows);
    content: "";
    height: 1px;
    left: 50%;
    opacity: 0.25;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${rem(1)};
  }
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
