"use client";

import styled from "styled-components";
import {
  animationDurationCSS,
  colors,
  curves,
  fontSizes,
  sizes,
} from "@/entities";
import { rem } from "polished";

export const Root = styled.article<{ $isPending: boolean }>`
  box-shadow: -${sizes.s4.rem} ${sizes.s4.rem} ${sizes.s8.rem} ${rem(1)}
    rgba(0, 0, 0, 0.5);
  color: ${({ $isPending }) =>
    $isPending ? "transparent" : colors.whiteGhost};
  padding: ${sizes.s8.rem};
  position: relative;
  transition: color ${animationDurationCSS(0.25)} ${curves.default};
  width: ${sizes.s256.rem};

  &::before {
    background:
      repeating-radial-gradient(#421a00 0 0.0001%, #4d2105 0 0.0002%) 60%
        60%/3000px 3000px,
      repeating-conic-gradient(#421a00 0 0.0001%, #4d2105 0 0.0002%) 40%
        40%/4000px 3000px;
    border: ${sizes.s4.rem} solid ${colors.whiteGhost};
    border-color: #5b1d00 #5b1d00 #371302 #371302;
    content: "";
    height: 100%;
    left: 0;
    mix-blend-mode: lighten;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export const DL = styled.dl`
  display: flex;
  flex-wrap: wrap;
  font-size: ${fontSizes.small.rem};
  margin: 0;
  position: relative;
`;

export const DT = styled.dt`
  width: 50%;
`;

export const DD = styled.dd`
  align-items: baseline;
  display: flex;
  margin: 0;
  width: 50%;
`;
