"use client";
import styled from "styled-components";
import { rem } from "polished";
import { colors } from "@/entities/design-tokens/colors";
import {
  globalContentMaxWidth,
  globalDecorationMaxWidth,
} from "@/entities/design-tokens/dimensions";
import maskImg from "@/entities/organisms/Splash/ali-flight.svg";
import { device, sizes } from "../../design-tokens/dimensions";
import { Paragraph } from "@/entities";
import { headerHeight } from "@/entities/organisms/Header/styles";

export const Root = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: ${rem(globalDecorationMaxWidth)};
  position: relative;
  width: 100%;

  @media (${device.small}) {
    height: calc(100vh - ${headerHeight});

    &::before,
    &::after {
      content: "";
      flex: 1;
      height: 100%;
    }

    &::after {
      background: ${colors.whiteGhost};
    }
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
  width: 100%;

  @media (${device.small}) {
    flex-direction: row;
  }
`;

export const FeetSection = styled.div`
  background: ${colors.blackEvil};
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media (${device.small}) {
    width: 50%;
  }

  &::before {
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    @media (${device.small}) {
      background: ${colors.whiteGhost};
      -webkit-mask: url(${maskImg.src}) no-repeat 350% center;
      mask: url(${maskImg.src}) no-repeat 350% center;
      -webkit-mask-size: 75%;
      mask-size: 75%;
    }
  }
`;
export const HeadSection = styled.div`
  background: linear-gradient(
    to right,
    ${colors.whiteGhost},
    ${colors.whiteGhost} 50%,
    ${colors.blackEvil} 50%
  );
  height: ${rem(480)};
  position: relative;
  width: 100%;

  @media (${device.small}) {
    background: transparent;
    height: auto;
    width: 50%;
  }

  &::before {
    background: linear-gradient(
      to right,
      ${colors.blackEvil},
      ${colors.blackEvil} 50%,
      ${colors.whiteGhost} 50%
    );
    content: "";
    height: 100%;
    left: 0;
    -webkit-mask:
      url(${maskImg.src}) no-repeat center center,
      linear-gradient(#fff 0 0);
    mask:
      url(${maskImg.src}) no-repeat center center,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    -webkit-mask-size: 75%;
    mask-size: 75%;
    position: absolute;
    top: 0;
    width: 100%;

    @media (${device.small}) {
      background: ${colors.whiteGhost};
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
    }
  }
`;

export const Copy = styled.div`
  padding: ${sizes.s32.rem} ${sizes.s16.rem};
  text-align: center;
  width: 100%;

  @media (${device.small}) {
    max-width: ${rem(480)};
    padding: ${sizes.s16.rem} ${sizes.s32.rem} ${sizes.s16.rem} ${sizes.s16.rem};
    text-align: left;
  }

  @media (${device.medium}) {
    padding: ${sizes.s16.rem};
  }
`;

export const CopyParagraph = styled(Paragraph)`
  text-align: center;

  @media (${device.small}) {
    text-align: left;
  }
`;
