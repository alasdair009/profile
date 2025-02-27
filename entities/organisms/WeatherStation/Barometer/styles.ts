"use client";
import styled from "styled-components";
import { borderRadii, sizes } from "@/entities";

export const Root = styled.meter`
  appearance: none;
  border-radius: ${borderRadii.round};
  height: ${sizes.s32.rem};
  position: absolute;
  width: ${sizes.s32.rem};

  &::-webkit-meter-bar {
    background: none;
  }

  &::-webkit-meter-suboptimum-value {
    background: transparent;
  }

  &::-webkit-meter-optimum-value {
    background: transparent;
  }
`;
