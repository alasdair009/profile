"use client";
import styled from "styled-components";
import { sizes } from "../../design-tokens/dimensions";
import { colors, Container, Fire, TextMask } from "@/entities";
import { rem } from "polished";

export const Root = styled(Container)`
  align-items: center;
  background: ${colors.blackEvil};
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${sizes.s48.rem});
  min-height: ${rem(400)};
  position: relative;
`;

export const Inner = styled.div`
  flex: 1;
  margin: 0 auto;
  max-width: ${sizes.s512.rem};
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const BackgroundFire = styled(Fire)`
  top: 40%;
  height: 60%;
  left: 0;
  position: absolute;
  transform: translatey(-50%);
  width: 100%;
`;

export const MaskWrapper = styled.div`
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
`;

export const ErrorTextMask = styled(TextMask)`
  display: flex;
  left: 0;
`;
