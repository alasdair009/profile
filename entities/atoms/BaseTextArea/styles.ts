"use client";
import styled from "styled-components";
import { colors, globalInputMaxWidth, sizes } from "@/entities";
import { rem, rgba } from "polished";

const inValidStyles = {
  background: rgba(colors.redHeat, 0.15),
};
export const Root = styled.textarea<{
  $isInvalid: boolean;
}>`
  background: ${({ $isInvalid }) => ($isInvalid ? inValidStyles.background : colors.greyDark)};
  border: ${rem(1)} solid ${colors.greenGrass};
  color: ${colors.whiteGhost};
  display: block;
  min-height: ${sizes.s256.rem};
  margin: 0 auto;
  max-width: ${rem(globalInputMaxWidth)};
  resize: none;
  width: 100%;

  &:user-invalid {
    background: ${inValidStyles.background};
  }
`;
