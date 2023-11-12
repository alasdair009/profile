"use client";
import styled from "styled-components";
import { globalTextMaxWidth, sizes } from "@/entities";
import { rem } from "polished";

export const Root = styled.section`
  display: block;
  margin: 0 auto;
  max-width: ${rem(globalTextMaxWidth)};
  overflow: hidden;
  padding: ${sizes.s8.rem};
  width: 100%;
`;
