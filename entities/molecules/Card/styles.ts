"use client";
import styled from "styled-components";
import {colors, device, Link, sizes} from "@/entities";
import { rem, rgba } from "polished";
import Image from "next/image";

export const Root = styled.article`
  background: ${colors.greyDark};
  box-shadow: 0 0 ${rem(10)} ${rem(6)} ${rgba(colors.whiteGhost, 0.35)};
  display: flex;
  height: ${rem(300)};
  margin: 0 auto;
  padding: ${sizes.s8.rem};
  position: relative;
  width: 100%;
  
  @media(${device.xsmall}) {
      max-width: ${sizes.s256.rem};
  }
`;

export const CardLink = styled(Link)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;

  &::after {
    display: none;
  }

  &:hover {
    filter: brightness(1.3);
  }
`;
export const Figure = styled.figure`
  display: flex;
  margin: 0;
  position: relative;
  width: 100%;
`;

export const CardImage = styled(Image)`
  align-content: center;
  background: ${colors.blackEvil};
  display: flex;
  min-height: ${sizes.s128.rem};
  justify-content: center;
  object-fit: cover;
  text-align: center;
  width: 100%;

  @media(${device.xsmall}) {
      min-height: ${sizes.s96.rem};
  }
`;

export const Content = styled.div``;

export const Date = styled.time`
  color: ${colors.whiteGhost};
  display: block;
  font-style: italic;
  text-align: center;
`;
