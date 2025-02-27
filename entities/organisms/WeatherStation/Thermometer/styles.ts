"use client";
import styled from "styled-components";
import { borderRadii, colors, fontSizes, sizes } from "@/entities";
import { rem } from "polished";

export const Root = styled.div`
  background: ${colors.greyLight};
  border-radius: ${borderRadii.r4};
  height: ${sizes.s64.rem};
  left: 3%;
  position: absolute;
  top: 3%;
  width: ${sizes.s40.rem};

  &::before {
    align-items: center;
    aspect-ratio: 1;
    bottom: ${sizes.s16.rem};
    color: ${colors.blackEvil};
    content: attr(data-content);
    display: flex;
    font-size: ${fontSizes.small.rem};
    justify-content: center;
    left: 50%;
    position: absolute;
    transform: translate(-50%, 50%);
    width: ${sizes.s32.rem};
    z-index: 2;
  }

  &::after {
    align-items: center;
    aspect-ratio: 1;
    background: var(--color);
    border: ${rem(1)} solid ${colors.blackEvil};
    border-radius: ${borderRadii.round};
    bottom: ${sizes.s16.rem};
    color: ${colors.blackEvil};
    content: "";
    display: flex;
    justify-content: center;
    left: 50%;
    position: absolute;
    transform: translate(-50%, 50%);
    width: ${sizes.s32.rem};
  }
`;

export const Lig = styled.meter`
  appearance: none;
  background: ${colors.whiteGhost};
  border: ${rem(1)} solid ${colors.blackEvil};
  height: ${sizes.s16.rem};
  left: 50%;
  position: absolute;
  top: ${sizes.s16.rem};
  transform: translateX(-50%) rotate(270deg);
  width: ${sizes.s40.rem};

  &::-webkit-meter-bar {
    background: none;
  }

  &::-webkit-meter-suboptimum-value {
    background: ${colors.redHeat};
  }

  &::-webkit-meter-optimum-value {
    background: ${colors.blueSea};
  }
`;
