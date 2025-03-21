"use client";
import styled from "styled-components";
import { rem } from "polished";
import { globalInputMaxWidth, sizes } from "@/entities";

export const Root = styled.label`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto ${sizes.s8.rem};
  max-width: ${rem(globalInputMaxWidth)};
  width: 100%;
`;
