"use client";
import { rem } from "polished";

import { HorizontalRuleMarginOptions } from "./HorizontalRule.types";
import { colors, globalDecorationMaxWidth, sizes } from "@/entities";
import styled from "styled-components";
import amLogo from "../../assets/am.svg";

const getMarginStyle = (
  margin: HorizontalRuleMarginOptions,
  decoration: boolean
): string => {
  switch (margin) {
    case "top":
      return `${sizes.s32.rem} auto ${decoration ? `calc(-${sizes.s24.rem} - ${rem(2)})` : 0}`;
    case "bottom":
      return `${decoration ? `calc(-${sizes.s24.rem} - ${rem(2)})` : 0} auto ${sizes.s32.rem}`;
    case "both":
      return `${sizes.s32.rem} auto`;
    case "none":
      return decoration ? `calc(-${sizes.s24.rem} - ${rem(2)}) auto` : `0 auto`;
  }
};
export const Root = styled.hr<{
  $decoration: boolean;
  $margin: HorizontalRuleMarginOptions;
}>`
  border: none;
  margin: ${({ $margin, $decoration }) => getMarginStyle($margin, $decoration)};
  max-width: ${rem(globalDecorationMaxWidth)};
  padding: ${({ $decoration }) =>
      $decoration ? `calc(${sizes.s24.rem} + ${rem(2)})` : rem(1)}
    0;
  position: relative;
  width: 100%;
  z-index: 1;

  &::before {
    background: ${colors.greenGrass};
    content: "";
    height: ${rem(2)};
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }

  &::after {
    aspect-ratio: 1;
    background: ${colors.blackEvil} url(${amLogo.src}) no-repeat center;
    border: ${rem(2)} solid ${colors.greenGrass};
    border-radius: 50%;
    content: "";
    display: ${({ $decoration }) => ($decoration ? "block" : "none")};
    height: ${sizes.s48.rem};
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: transform 1s;

    &:hover {
      transform: translate(-50%, -50%) rotateX(360deg);
    }
  }
`;
