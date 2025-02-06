"use client";
import styled from "styled-components";
import { rem } from "polished";
import { sizes } from "@/entities";

export const Root = styled.br`
  content: "";
  display: block;
  margin-bottom: calc(${sizes.s8.rem} * var(--multiplier));
`;
