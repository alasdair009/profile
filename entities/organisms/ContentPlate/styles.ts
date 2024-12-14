"use client";
import styled, { css, keyframes } from "styled-components";
import { Property } from "csstype";
import {
  animationDurationCSS,
  curves,
  device,
  globalContentMaxWidth,
  globalDecorationMaxWidth,
  IFrame,
  sizes,
} from "@/entities";
import { rem } from "polished";
import { ContentPlateProps } from "./ContentPlate.types";
import Image from "next/image";

const flipPoint = device.medium;

const turnAmount = 0.05;
const threeDRotate = keyframes`
    0%, 100% {
      transform: perspective(1000px) rotateX(-${turnAmount}turn) rotateY(0);
    }
  25% {
    transform: perspective(1000px) rotateX(0) rotateY(-${turnAmount}turn);
  }
  50% {
    transform: perspective(1000px) rotateX(${turnAmount}turn) rotateY(0);
  }
  75% {
    transform: perspective(1000px) rotateX(0) rotateY(${turnAmount}turn);
  }
`;

const foregroundAnimation = css`
  animation: ${threeDRotate} ${animationDurationCSS(3)} infinite
    ${curves.linear};
`;

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

export const ForegroundWrapper = styled.figure<{
  $foregroundAnimate: ContentPlateProps["foregroundAnimate"];
}>`
  align-items: center;
  ${({ $foregroundAnimate }) =>
    $foregroundAnimate ? foregroundAnimation : "none"};
  display: flex;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  padding: ${sizes.s16.rem};
  position: relative;
  width: 100%;

  @media (${flipPoint}) {
    padding: 0;
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

export const FrameBoxWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: ${sizes.s16.rem};
  width: 100%;

  @media (${flipPoint}) {
    width: 50%;
  }
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
