"use client";
import styled from "styled-components";
import { rem } from "polished";
import { Property } from "csstype";
import {colors, fonts, fontSizes, FontSizes, globalTextMaxWidth, sizes} from "@/entities";

export const Root = styled.p<{
  $fontSize: FontSizes;
  $align: Property.TextAlign;
}>`
  color: ${colors.whiteGhost};
  display: block;
  font-family: ${fonts.body};
  font-size: ${({ $fontSize }) => fontSizes[$fontSize].rem};
  margin: 0 auto ${sizes.s24.rem};
  max-width: ${rem(globalTextMaxWidth)};
  text-align: ${({ $align }) => $align};
  width: 100%;
`;
