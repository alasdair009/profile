"use client";
import styled from "styled-components";
import { colors, fontSizes, fontWeights, sizes } from "@/entities";
import { darken, rem } from "polished";
import { ButtonVariant } from "@/entities/atoms/Button/Button.types";

const buttonClipPath = `polygon(calc(0% + ${sizes.s8.rem}) 0, 100% 0, calc(100% - ${sizes.s8.rem}) 100%, 0 100%);`;
export const Root = styled.button<{ $variant: ButtonVariant }>`
  align-items: center;
  appearance: none;
  background: transparent;
  border: none;
  color: ${colors.whiteGhost};
  cursor: pointer;
  display: flex;
  font-size: ${fontSizes.medium.rem};
  font-weight: ${fontWeights.bold};
  height: ${({ $variant }) => ($variant === "standard" ? sizes.s48.rem : "auto")};
  justify-content: center;
  min-width: ${({ $variant }) => ($variant === "standard" ? sizes.s64.rem : "0")};
  max-width: ${sizes.s256.rem};
  padding: 0 ${({ $variant }) => ($variant === "standard" ? sizes.s48.rem : "0")};
  position: relative;
  transition: padding 0.5s;
  z-index: 0;

  &::before,
  &::after {
    background: ${colors.greenGrass};
    clip-path: ${buttonClipPath};
    content: "";
    display: ${({ $variant }) => ($variant === "standard" ? "block" : "none")};
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
    background: ${colors.greyDark};
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

  &:active::before {
    background: ${darken(0.05, colors.greenGrass)};
  }
`;
