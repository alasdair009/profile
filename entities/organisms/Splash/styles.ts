"use client";
import styled from "styled-components";
import { Header, sizes } from "@/entities";
import { rem } from "polished";
import { colors } from "@/entities/design-tokens/colors";
import { globalContentMaxWidth } from "@/entities/design-tokens/dimensions";
import maskImg from "@/entities/organisms/Splash/ali-flight.svg";

export const Root = styled.section`
  align-items: center;
  display: flex;
  height: calc(100vh - ${Header.height});
  justify-content: center;
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
  position: relative;
  width: 100%;
`;

export const Inner = styled.div`
  display: flex;
  height: 100%;
  max-width: ${rem(globalContentMaxWidth)};
  width: 100%;
`;

export const FeetSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 50%;

  &::before {
    background: ${colors.whiteGhost};
    content: "";
    height: 100%;
    left: 0;
    -webkit-mask: url(${maskImg.src}) no-repeat 350% center;
    mask: url(${maskImg.src}) no-repeat 350% center;
    -webkit-mask-size: 75%;
    mask-size: 75%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
export const HeadSection = styled.div`
  position: relative;
  width: 50%;

  &::before {
    background: ${colors.whiteGhost};
    content: "";
    height: 100%;
    left: 0;
    -webkit-mask:
      url(${maskImg.src}) no-repeat -50% center,
      linear-gradient(#fff 0 0);
    mask:
      url(${maskImg.src}) no-repeat -50% center,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    -webkit-mask-size: 75%;
    mask-size: 75%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export const Copy = styled.div`
  max-width: ${sizes.s256.rem};
  width: 100%;
`;
