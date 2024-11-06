"use client";
import styled from "styled-components";
import {
  colors,
  globalContentMaxWidth,
  globalDecorationMaxWidth,
  sizes,
} from "@/entities";
import Image from "next/image";
import { rem } from "polished";

export const Root = styled.figure`
  clip-path: inset(0);
  height: ${sizes.s512.rem};
  margin: 0 auto;
  max-width: ${rem(globalDecorationMaxWidth)};
  overflow: hidden;
  position: relative;

  &::after {
    box-shadow: inset 0 0 ${rem(14)} ${rem(9)} ${colors.blackEvil};
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export const FixedImage = styled(Image)`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: fixed;
  top: 0;
  width: 100%;
`;
