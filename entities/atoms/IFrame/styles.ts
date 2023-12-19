"use client";
import styled from "styled-components";
import { sizes } from "@/entities";

export const Root = styled.iframe`
  aspect-ratio: 16 / 9;
  border: none;
  display: block;
  margin: 0 auto;
  max-width: ${sizes.s512.rem};
  width: 100%;
`;
