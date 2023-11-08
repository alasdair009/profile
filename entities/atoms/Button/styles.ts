"use client";
import styled from "styled-components";
import { colors } from "../../design-tokens/colors";
import { sizes } from "../../design-tokens/dimensions";
import { darken, rem } from "polished";
import { fontSizes, fontWeights } from "../../design-tokens/typography";

export const Root = styled.button`
  align-items: center;
  appearance: none;
  background: ${colors.greenGrass};
  border: ${rem(1)} solid ${darken(0.25, colors.greenGrass)};
  color: ${colors.whiteGhost};
  cursor: pointer;
  display: flex;
  font-size: ${fontSizes.medium.rem};
  font-weight: ${fontWeights.bold};
  height: ${sizes.s48.rem};
  justify-content: center;
  min-width: ${sizes.s64.rem};
  max-width: ${sizes.s256.rem};
  padding: 0 ${sizes.s16.rem};

  &:hover {
    filter: brightness(1.3);
  }

  &:active {
    background: ${darken(0.05, colors.greenGrass)};
  }
`;
