"use client";
import styled from "styled-components";
import { colors, Link, sizes } from "@/entities";
import { rem } from "polished";
import Image from "next/image";

export const Root = styled.article`
  background: ${colors.greyDark};
  box-shadow: 0 0 ${rem(3)} ${rem(3)} ${colors.blackEvil};
  display: flex;
  height: ${rem(300)};
  margin: 0 auto;
  max-width: ${sizes.s256.rem};
  padding: ${sizes.s8.rem};
  position: relative;
  width: 100%;
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
  width: 100%;
`;

export const CardImage = styled(Image)`
  align-content: center;
  background: ${colors.blackEvil};
  display: flex;
  min-height: ${sizes.s96.rem};
  justify-content: center;
  object-fit: contain;
  text-align: center;
  width: 100%;
`;

export const Content = styled.div``;

export const Date = styled.time`
    color: ${colors.whiteGhost};
    display: block;
    font-style: italic;
    text-align: center;
`;
