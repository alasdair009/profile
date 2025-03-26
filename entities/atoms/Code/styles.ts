"use client";
import styled from "styled-components";
import { colors, sizes } from "@/entities";
import { darken, rem } from "polished";

export const Root = styled.code`
  background: ${darken(0.04, colors.greyDark)};
  border: ${rem(1)} solid ${colors.greenGrass};
  display: block;
  font-family: monospace;
  -webkit-overflow-scrolling: touch;
  //overflow-x: scroll;
  padding: ${sizes.s8.rem};
  //white-space: pre;
`;
