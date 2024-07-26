"use client";

import styled, { keyframes } from "styled-components";
import { colors, sizes } from "@/entities";
import { darken } from "polished";

export const footerHeight = sizes.s128.rem;

const waving = keyframes`
    0% {
        transform: translate3d(-90px,0,0);
    }
    100% {
        transform: translate3d(85px,0,0);
    }
`;

export const Root = styled.footer`
  margin: 0 auto;
  position: relative;
  width: 100%;
`;

export const Waves = styled.svg`
  position: relative;
  width: 100%;
  margin-bottom: -7px; /*Fix for safari gap*/
  height: ${sizes.s128.rem};
`;

export const Parallax = styled.g`
  > use {
    animation: ${waving} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
`;

export const Wave1 = styled.use`
  fill: ${darken(0.5, colors.greenGrass)};
`;

export const Wave2 = styled.use`
  fill: ${darken(0.25, colors.greenGrass)};
`;

export const Wave3 = styled.use`
  fill: ${darken(0.15, colors.greenGrass)};
`;

export const Wave4 = styled.use`
  fill: ${colors.greenGrass};
`;
