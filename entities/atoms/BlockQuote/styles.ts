"use client";
import styled from "styled-components";
import {
  colors,
  fontSizes,
  fontWeights,
  globalTextMaxWidth,
  sizes,
} from "@/entities";
import { rem } from "polished";

export const Root = styled.blockquote`
  display: block;
  font-size: ${fontSizes.large.rem};
  font-style: italic;
  margin: ${sizes.s32.rem} auto;
  max-width: ${rem(globalTextMaxWidth)};
  padding: ${sizes.s8.rem};
  position: relative;
  text-align: center;
  text-wrap: balance;

  &::before,
  &::after {
    color: ${colors.greenGrass};
    content: '"';
    font-size: ${fontSizes.xxlarge.rem};
    font-weight: ${fontWeights.black};
  }
`;
