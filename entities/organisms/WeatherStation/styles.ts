"use client";
import styled from "styled-components";
import {
  borderRadii,
  colors,
  globalContentMaxWidth,
  globalDecorationMaxWidth,
  sizes,
  Sun as SunEntity,
  Tree,
} from "@/entities";
import { rem, rgba } from "polished";
import Image from "next/image";

export const Root = styled.section`
  display: block;
  margin: 0 auto;
  max-width: ${rem(globalDecorationMaxWidth)};
  position: relative;
  width: 100%;
`;

export const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
`;

export const House = styled(Image)`
  aspect-ratio: 1;
  height: auto;
  max-width: ${rem(900)};
  position: relative;
  width: 100%;
`;

export const Frame = styled.div`
  background: var(--background);
  border-radius: 2px;
  border-color: #ddd #eee #fff #eee;
  border-style: solid;
  border-width: 5vmin;
  box-shadow:
    0 0 ${rem(5)} 0 ${rgba(colors.whiteGhost, 0.25)} inset,
    0 ${rem(5)} ${rem(10)} ${rem(5)} ${rgba(colors.blackEvil, 0.25)};
  display: flex;
  margin: 10vh 10vw 5vh;
  position: relative;

  &::before {
    border-radius: ${borderRadii.r2};
    bottom: -2vmin;
    box-shadow: 0 ${rem(2)} ${rem(5)} 0 ${rgba(colors.blackEvil, 0.25)} inset;
    content: "";
    left: -2vmin;
    position: absolute;
    right: -2vmin;
    top: -2vmin;
  }
  &::after {
    border-radius: ${borderRadii.r2};
    bottom: -2.5vmin;
    box-shadow: 0 ${rem(2)} ${rem(5)} 0 ${rgba(colors.blackEvil, 0.25)};
    content: "";
    left: -2.5vmin;
    position: absolute;
    right: -2.5vmin;
    top: -2.5vmin;
  }
`;

export const HouseTree = styled(Tree)`
  height: ${sizes.s64.rem};
  position: absolute;
  right: var(--right);
  top: var(--top);
  width: ${sizes.s64.rem};
`;

export const SunAnchor = styled.span`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: rotate(calc(var(--rotation) * 1deg));
  width: 100%;
`;

export const Sun = styled(SunEntity)`
  left: ${sizes.s24.rem};
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;
