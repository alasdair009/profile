"use client";

import styled from "styled-components";
import { colors, sizes } from "@/entities";
import { rem } from "polished";

export const Root = styled.div`
  background: linear-gradient(165deg, #527785 0%, #7fb4c7 100%);
  overflow: hidden;
  position: relative;
`;

export const CloudCircle = styled.div<{ $dispersion: number }>`
  border-radius: 50%;
  box-shadow: 0 ${rem(sizes.s256.raw * 1.5)}
    ${({ $dispersion }) => rem($dispersion)} 0 ${colors.whiteGhost};
  filter: url(#cloudFilter);
  height: ${sizes.s256.rem};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -200%) translateZ(0);
  width: ${sizes.s512.rem};
`;
