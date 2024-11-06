"use client";
import styled from "styled-components";
import { rem } from "polished";
import { Property } from "csstype";
import {
  colors,
  device,
  fonts,
  fontSizes,
  FontSizes,
  globalTextMaxWidth,
  sizes,
} from "@/entities";
import { lineHeights } from "@/entities/design-tokens/typography/typography";
import { lineClamp } from "@/lib/line-clamp";

export const Root = styled.p<{
  $color: Property.Color;
  $fontSize: FontSizes;
  $align: Property.TextAlign;
  $textWrap: "wrap" | "balance";
  $lines: number | undefined;
}>`
  color: ${({ $color }) => $color} !important;
  display: block;
  font-family: ${fonts.body} !important;
  font-size: ${({ $fontSize }) => fontSizes[$fontSize].rem} !important;
  margin: 0 auto ${sizes.s24.rem} !important;
  max-width: calc(100vw - ${sizes.s16.rem});
  text-align: ${({ $align }) => $align};
  text-wrap: ${({ $textWrap }) => $textWrap};
  width: 100%;
  ${({ $lines }) => lineClamp(`${lineHeights.p}`, $lines)};

  @media (min-width: ${globalTextMaxWidth}px) {
    max-width: ${rem(globalTextMaxWidth)};
  }
`;
