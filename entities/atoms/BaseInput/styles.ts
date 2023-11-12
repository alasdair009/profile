"use client";
import styled from "styled-components";
import { colors, fontSizes, globalInputMaxWidth, sizes } from "@/entities";
import { rem, rgba } from "polished";

export const Root = styled.input`
  appearance: none;
  background: ${colors.greyDark};
  border: ${rem(1)} solid ${colors.greenGrass};
  color: ${colors.whiteGhost};
  display: block;
  font-size: ${fontSizes.medium.rem};
  margin: ${sizes.s2.rem} auto 0;
  max-width: ${rem(globalInputMaxWidth)};
  padding: ${sizes.s8.rem};
  width: 100%;

  &:invalid {
    background: ${rgba(colors.redHeat, 0.15)};
  }
`;
