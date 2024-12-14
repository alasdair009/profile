"use client";
import styled, { keyframes } from "styled-components";
import { animationDurationCSS, curves, sizes } from "@/entities";
import Image from "next/image";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
export const Root = styled.div`
  content: "";
  border-radius: 50%;
  display: block;
  height: ${sizes.s48.rem};
  width: ${sizes.s48.rem};
`;

export const SpinnerImage = styled(Image)`
  animation: ${rotate} ${animationDurationCSS(1)} ${curves.linear} infinite;
  height: 100%;
  object-fit: contain;
  width: 100%;
`;
