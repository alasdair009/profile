"use client";
import styled from "styled-components";
import { Header } from "@/entities";
import { rem } from "polished";
import { globalContentMaxWidth } from "@/entities/design-tokens/dimensions";
import maskImg from "@/entities/organisms/Splash/mask.svg";

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

export const SplashCopy = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;
`;
export const MaskWrapper = styled.div`
  background: white;
  height: 100%;
  -webkit-mask-image: url(${maskImg.src});
  mask-image: url(${maskImg.src});
  -webkit-mask-position: center;
  mask-position: center;
  overflow: hidden;
  width: 50%;
`;
