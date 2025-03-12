"use client";
import styled from "styled-components";
import { sizes } from "../../design-tokens/dimensions";
import { borderRadii } from "../../design-tokens/effects";
import { colors } from "../../design-tokens/colors";

export const Root = styled.span`
  aspect-ratio: 1;
  border-radius: ${borderRadii.round};

  display: inline-block;
  min-height: ${sizes.s40.rem};
  min-width: ${sizes.s40.rem};
  overflow: hidden;
  position: relative;

  &::before {
    border-radius: ${borderRadii.round};
    box-shadow: ${sizes.s16.rem} ${sizes.s8.rem} 0 0 ${colors.whiteGhost};
    content: "";
    height: 100%;
    left: -${sizes.s16.rem};
    position: absolute;
    top: -${sizes.s8.rem};
    width: 100%;
  }
`;
