"use client";
import styled from "styled-components";
import { colors, fontSizes, globalContentMaxWidth, sizes } from "@/entities";
import { rem } from "polished";

export const Root = styled.details`
  margin: 0 auto ${rem(1)};
  max-width: ${rem(globalContentMaxWidth)};
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const Summary = styled.summary`
  align-items: center;
  background: ${colors.greyLight};
  cursor: pointer;
  font-size: ${fontSizes.mlarge.rem};
  justify-content: flex-start;
  padding: ${sizes.s8.rem};
  position: relative;
  width: 100%;

  &:hover {
    filter: brightness(1.3);
  }

  &::marker {
    color: ${colors.greenGrass};
  }
`;

export const Content = styled.div`
  background: ${colors.greyDark};
  overflow: hidden;
  padding: ${sizes.s8.rem};
  position: relative;
  width: 100%;
`;
