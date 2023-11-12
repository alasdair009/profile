"use client";
import styled from "styled-components";
import { colors, globalInputMaxWidth, sizes } from "@/entities";
import { rem } from "polished";

export const Root = styled.textarea`
  background: ${colors.greyDark};
  border: ${rem(1)} solid ${colors.greenGrass};
  color: ${colors.whiteGhost};
  display: block;
  min-height: ${sizes.s256.rem};
  margin: 0 auto;
  max-width: ${rem(globalInputMaxWidth)};
  resize: none;
  width: 100%;
`;
