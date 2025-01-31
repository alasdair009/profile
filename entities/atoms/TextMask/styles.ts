"use client";
import styled from "styled-components";
import { fonts, fontSizes, fontWeights } from "@/entities";
import { Property } from "csstype";

export const Root = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  &::before,
  &::after {
    background: var(--maskFill);
    content: "";
    flex: 1;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  &::before,
  &::after {
    background: var(--maskFill);
    content: "";
    flex: 1;
  }
`;

export const Rect = styled.rect`
  fill: var(--maskFill);
  mask: url(#mask);
`;

export const SVG = styled.svg`
  height: 100%;
  width: 100%;
`;

export const Text = styled.text`
  alignment-baseline: middle;
  font-family: ${fonts.body};
  font-size: ${fontSizes.large.rem};
  font-weight: ${fontWeights.black};
  text-anchor: middle;
`;
