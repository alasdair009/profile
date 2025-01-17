"use client";

import styled from "styled-components";
import { colors, sizes } from "@/entities";
import { rem } from "polished";
import { CSSProperties } from "react";

export const Root = styled.div<{ $skyColor: CSSProperties["background"] }>`
  background: ${({ $skyColor }) => $skyColor};
  overflow: hidden;
  position: relative;
`;

export const CloudCircle = styled.div`
  border-radius: 50%;
  filter: url(#cloudFilter);
  height: ${sizes.s256.rem};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -200%) translateZ(0);
  width: ${sizes.s512.rem};
`;
