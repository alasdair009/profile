"use client";
import styled, { keyframes } from "styled-components";
import { rem, rgba } from "polished";

const rise = keyframes`
  from {
    opacity: 0;
    transform: scale(1);
    bottom: 0;
  }
  25% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale(0);
    bottom: 75%;
  }
`;

export const Ember = styled.span`
  animation: ${rise} calc(var(--duration) * 1s) ease-in infinite;
  animation-delay: calc(var(--animationDelay) * var(--duration) * 1s);
  aspect-ratio: 1;
  background-image: radial-gradient(var(--baseColor) 20%, transparent 70%);
  border-radius: 50%;
  bottom: 0;
  left: calc(
    (100% - var(--particleSize)) *
      ((var(--index) - 1) / var(--numberOfParticles))
  );
  mix-blend-mode: screen;
  opacity: 0;
  position: absolute;
  width: var(--particleSize);
`;

export const Root = styled.div`
  filter: blur(0.32);
  position: relative;
`;
