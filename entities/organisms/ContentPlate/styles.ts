"use client";
import styled from "styled-components";
import { Property } from "csstype";
import {
  device,
  globalContentMaxWidth,
  globalDecorationMaxWidth,
  sizes,
} from "@/entities";
import { rem } from "polished";
import { ContentPlateProps } from "./ContentPlate.types";
import Image from "next/image";

const flipPoint = device.medium;

export const Root = styled.section`
  margin: 0 auto;
  max-width: ${rem(globalDecorationMaxWidth)};
  overflow: hidden;
  position: relative;
`;

export const Inner = styled.div<{
  $orientation: Exclude<ContentPlateProps["orientation"], undefined>;
}>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
  position: relative;
  width: 100%;

  @media (${flipPoint}) {
    flex-direction: ${({ $orientation }) =>
      $orientation === "left" ? "row" : "row-reverse"};
  }
`;

export const BackgroundWrapper = styled.figure<{
  $backgroundCss: Property.Background;
}>`
  background: ${({ $backgroundCss }) => $backgroundCss};
  height: 100%;
  left: 0;
  margin: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const ForegroundWrapper = styled.figure`
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media (${flipPoint}) {
    width: 50%;
  }
`;

export const ForegroundImage = styled(Image)`
  display: block;
  height: ${rem(400)};
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  width: ${rem(400)};
`;

export const CopyBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${sizes.s16.rem};
  width: 100%;

  @media (${flipPoint}) {
    width: 50%;
  }
`;
