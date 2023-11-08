"use client";
import styled from "styled-components";
import { Property } from "csstype";
import {
  globalContentMaxWidth,
  globalDecorationMaxWidth, sizes,
} from "@/entities/design-tokens/dimensions";
import { rem } from "polished";
import { ContentPlateProps } from "@/entities/organisms/ContentPlate/ContentPlate.types";

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
  flex-direction: ${({ $orientation }) => $orientation};
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
  position: relative;
  width: 100%;
`;

export const BackgroundWrapper = styled.figure<{
  $backgroundCss: Property.Background;
}>`
  background: ${({ $backgroundCss }) => $backgroundCss};
  height: 100%;
  left: 0;
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
  width: 50%;
`;

export const CopyBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${sizes.s16.rem};
  width: 50%
`;
