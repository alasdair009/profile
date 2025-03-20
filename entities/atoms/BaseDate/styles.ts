"use client";
import styled from "styled-components";
import { defaultFieldStyles } from "@/entities/atoms/BaseInput/styles";
import { colors } from "@/entities";

export const Root = styled.input<{ $isInvalid: boolean }>`
  ${({ $isInvalid }) => defaultFieldStyles($isInvalid)}

  &::-webkit-calendar-picker-indicator {
    background-color: ${colors.greenGrass};
    cursor: pointer;

    &:hover {
      filter: brightness(1.3);
    }
  }
`;
