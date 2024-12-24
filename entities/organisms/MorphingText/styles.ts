"use client";

import styled, { keyframes } from "styled-components";
import { fontSizes, globalContentMaxWidth, Heading } from "@/entities";
import { rem } from "polished";

const wordAnim = keyframes`
    0%, 5%, 100% { filter: blur(0); opacity: 1; }
    20%, 80% { filter: blur(1em); opacity: 0; }
`;

const getSpeed = function (wordCount: number) {
  return wordCount * 1.5 + 2;
};
const getDelay = function (wordCount: number, wordIndex: number) {
  const speed = getSpeed(wordCount);
  return (speed / (wordCount + 1)) * wordIndex - speed;
};
export const Root = styled.section`
  display: flex;
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
  position: relative;
  width: 100%;
`;

export const Text = styled.span<{ $wordIndex: number; $wordCount: number }>`
  animation: ${wordAnim} ${({ $wordCount }) => getSpeed($wordCount)}s infinite
    ease-in-out;
  animation-delay: ${({ $wordIndex, $wordCount }) =>
    getDelay($wordCount, $wordIndex)}s;
  display: inline-block;
  font-size: ${fontSizes.xxlarge.rem};
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  @media (prefers-reduced-motion) {
    animation: none;
    left: auto;
    position: relative;
    top: auto;
    transform: none;
  }
`;

export const Morpher = styled.h2`
  filter: contrast(25) blur(${rem(1)});
  position: relative;
  min-height: ${rem(480)};
  width: 100%;

  @media (prefers-reduced-motion) {
    flex-direction: column;
    display: flex;
    justify-content: center;
  }
`;
