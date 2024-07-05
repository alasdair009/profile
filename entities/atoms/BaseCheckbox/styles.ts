"use client";

import styled from "styled-components";
import { colors, sizes } from "@/entities";
import { rem } from "polished";

export const Root = styled.input<{ $isInvalid: boolean }>`
  appearance: none;
  aspect-ratio: 1;
  background: ${colors.blackEvil};
  border-color: ${({ $isInvalid }) =>
    $isInvalid ? colors.redHeat : colors.greenGrass};
  border-style: solid;
  border-width: ${rem(1)};
  position: relative;
  width: ${sizes.s32.rem};

  &::after {
    background: ${colors.greenGrass};
    clip-path: polygon(0 0, 100% 0, 100% 50%, 37.5% 50%, 37.5% 100%, 0 100%);
    content: "";
    height: 50%;
    margin: 50%;
    position: absolute;
    transform: translateY(-50%) translateX(-100%) rotate(90deg) scale(0);
    transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    width: 75%;
  }

  &:checked::after {
    transform: translateY(-60%) translateX(-50%) rotate(135deg) scaleX(-1);
  }

  &:user-invalid {
    border-color: ${colors.redHeat};
  }
`;
