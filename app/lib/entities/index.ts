"use client";

import styled from "styled-components";

export { Splash } from "../../../entities/organisms/Splash";

export const FireWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  width: 100%;
`;
export const FirePadding = styled.div<{ $backgroundColor: string }>`
  background: ${({ $backgroundColor }) => $backgroundColor};
  flex: 1;
`;

export const MaskWrapper = styled.div`
  display: flex;
  width: 100%;

  &::before {
    background:;
    content: "";
    flex: 1;
  }

  &::after {
    content: "";
    flex: 1;
  }
`;
