"use client";
import styled, { css } from "styled-components";
import { colors, fontSizes, globalInputMaxWidth, sizes } from "@/entities";
import { rem, rgba } from "polished";

const inValidStyles = {
  background: rgba(colors.redHeat, 0.15),
};

export const Root = styled.input<{
  $isInvalid: boolean;
  $hasBeenFocussed: boolean;
}>`
  appearance: none;
  background: ${({ $isInvalid }) =>
    $isInvalid ? inValidStyles.background : colors.greyDark};
  border: ${rem(1)} solid ${colors.greenGrass};
  color: ${colors.whiteGhost};
  display: block;
  font-size: ${fontSizes.medium.rem};
  margin: ${sizes.s2.rem} auto 0;
  max-width: ${rem(globalInputMaxWidth)};
  padding: ${sizes.s8.rem};
  width: 100%;

  &:user-invalid {
    background: ${({ $hasBeenFocussed }) =>
      $hasBeenFocussed ? inValidStyles.background : undefined};
  }
`;
