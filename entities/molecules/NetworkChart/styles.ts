"use client";
import styled from "styled-components";
import { rem } from "polished";
import { Button, colors, sizes } from "@/entities";

export const Root = styled.div`
  border: ${rem(1)} solid ${colors.greenGrass};
  min-height: ${sizes.s1024.rem};
  max-height: 100vh;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const ContextMenuRoot = styled.div`
  background: ${colors.greyDark};
  box-shadow: 0 0 3px 3px ${colors.blackEvil};
  max-width: 100vw;
  padding: ${sizes.s56.rem} ${sizes.s16.rem} ${sizes.s16.rem};
  position: relative;
  width: ${sizes.s512.rem};
`;

export const ContextMenuButton = styled(Button)`
  position: absolute;
  right: ${sizes.s8.rem};
  top: ${sizes.s8.rem};
`;

export const ContextMenuFig = styled.pre`
  display: inline-block;
  margin: 0;
`;
