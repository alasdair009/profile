"use client";
import styled, { css } from "styled-components";
import { colors, fontSizes, globalInputMaxWidth, sizes } from "@/entities";
import { rem, rgba } from "polished";

export const fieldHeight = sizes.s40.rem;

const inValidStyles = {
  background: rgba(colors.redHeat, 0.15),
};

export const defaultFieldStyles = (isInvalid: boolean) => {
  return css`
    appearance: none;
    background-color: ${isInvalid ? inValidStyles.background : colors.greyDark};
    border: ${rem(1)} solid ${colors.greenGrass};
    color: ${colors.whiteGhost};
    display: block;
    font-size: ${fontSizes.medium.rem};
    height: ${fieldHeight};
    margin: ${sizes.s2.rem} auto 0;
    max-width: ${rem(globalInputMaxWidth)};
    padding: ${sizes.s8.rem};
    width: 100%;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: ${colors.whiteGhost};
      -webkit-box-shadow: 0 0 0 ${fieldHeight}
        ${isInvalid ? inValidStyles.background : colors.greyDark} inset;
    }

    &:user-invalid {
      background-color: ${inValidStyles.background};
    }
  `;
};
