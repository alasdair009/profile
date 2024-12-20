import { colors } from "../colors";
import styled, { css } from "styled-components";
import { rem } from "polished";
import { sizes } from "../dimensions";

export const scrollbarStyles = `
    scrollbar-color: ${colors.greenGrass} ${colors.blackEvil};
    scrollbar-width: 10%;
`;

export const scrollbar = `
  :root {
    ${scrollbarStyles}
  }
`;

export const ScrollBarDemo = styled.div`
  ${css`
    ${scrollbarStyles}
  `}
  border: ${rem(1)} solid ${colors.blueSea};
  cursor: all-scroll;
  height: ${sizes.s128.rem};
  overflow: scroll;
`;
