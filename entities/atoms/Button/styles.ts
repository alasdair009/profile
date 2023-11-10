"use client";
import styled from "styled-components";
import {colors, fontSizes, fontWeights, sizes} from "@/entities";
import { darken, rem } from "polished";

const buttonClipPath = `polygon(calc(0% + ${sizes.s8.rem}) 0, 100% 0, calc(100% - ${sizes.s8.rem}) 100%, 0 100%);`;
export const Root = styled.button`
  align-items: center;
  appearance: none;
  background: transparent;
  border: none;
  color: ${colors.whiteGhost};
  cursor: pointer;
  display: flex;
  font-size: ${fontSizes.medium.rem};
  font-weight: ${fontWeights.bold};
  height: ${sizes.s48.rem};
  justify-content: center;
  min-width: ${sizes.s64.rem};
  max-width: ${sizes.s256.rem};
  padding: 0 ${sizes.s48.rem};
  position: relative;
  transition: padding 0.5s;

  &::before,
  &::after {
    background: ${colors.greenGrass};
    clip-path: ${buttonClipPath};
    content: "";
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    transition: all 0.5s;
    width: calc(100% - ${sizes.s32.rem});
    z-index: -1;
  }

  &::after {
    background: ${colors.blackEvil};
    left: calc(50% + ${rem(5)});
    top: ${rem(5)};
    z-index: -2;
  }

  &:hover {
    &::before,
    &::after {
      width: calc(100% - ${sizes.s8.rem});
    }

    &::after {
      background: ${colors.whiteGhost};
    }
  }

  &:active {
    background: ${darken(0.05, colors.greenGrass)};
  }
`;
