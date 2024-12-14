import styled from "styled-components";
import { Progress } from "@/entities/atoms/Progress";
import {
  animationDurationCSS,
  colors,
  curves,
  fontSizes,
  sizes,
} from "@/entities";

export const Root = styled.div<{ $value: number }>`
  @property --integer {
    syntax: "<integer>";
    initial-value: 0;
    inherits: false;
  }
  --num: ${({ $value }) => $value};

  align-items: center;
  aspect-ratio: 1;
  counter-reset: num var(--num);
  display: flex;
  justify-content: center;
  position: relative;
  transition: --num 4s;
  width: ${sizes.s128.rem};

  &::before {
    align-items: center;
    animation: counter ${animationDurationCSS(5)} ${curves.linear} infinite
      alternate;
    color: ${colors.whiteGhost};
    content: counter(num);
    display: flex;
    font-size: ${fontSizes.mlarge.rem};
    height: 100%;
    justify-content: center;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`;

export const ProgressRing = styled(Progress)``;
