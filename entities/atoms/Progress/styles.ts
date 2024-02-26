import styled from "styled-components";
import { colors, sizes } from "@/entities";
import dialIcon from "./assets/dial.svg";
import { rgba } from "polished";

const getCutPoint = (value: number, max: number) => {
  return (value / max) * 100;
};

export const Root = styled.div`
  align-items: center;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  height: ${sizes.s96.rem};
  justify-content: center;
  position: relative;

  &::before {
    background: radial-gradient(
      transparent,
      transparent 30%,
      ${rgba(colors.blackEvil, 0.5)} 30%,
      ${rgba(colors.blackEvil, 0.5)} 70%,
      transparent 50%
    );
    border-radius: 50%;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
export const ProgressElement = styled.progress<{ max: number; value: number }>`
  appearance: none;
  background: conic-gradient(
    ${colors.greenGrass},
    ${colors.whiteGhost},
    ${colors.whiteGhost} ${({ max, value }) => getCutPoint(value, max)}%,
    transparent ${({ max, value }) => getCutPoint(value, max)}%
  );
  height: 100%;
  mask: url(${dialIcon.src}) no-repeat center;
  overflow: hidden;
  position: relative;
  width: 100%;

  &::-webkit-progress-bar {
    appearance: none;
    background: transparent;
    display: none;
  }
`;
