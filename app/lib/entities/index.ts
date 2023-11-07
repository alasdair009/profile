"use client";

import styled from "styled-components";

export * from "@/entities";
export { Splash } from "./Splash";

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
