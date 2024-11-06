"use client";
import styled, { css } from "styled-components";
import { borderRadii, colors, sizes } from "@/entities";
import { darken, lighten, rgba } from "polished";
import { fieldHeight } from "@/entities/atoms/BaseInput/styles";

const optionStyles = css`
  align-items: center;
  box-sizing: border-box;
  color: ${colors.whiteGhost};
  cursor: pointer;
  display: flex;
  gap: ${sizes.s8.rem};
  justify-content: center;
  transition-duration: 0.25s;
  width: 100%;

  * {
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Root = styled.select`
  min-height: ${fieldHeight};
  max-width: ${sizes.s256.rem};
  position: relative;
  width: 100%;

  &:hover {
    filter: brightness(1.3);
  }

  &:has(:popover-open) button {
    background: ${darken(0.1, colors.greenGrass)};
  }

  option {
    ${optionStyles};
    background-color: ${colors.blackEvil};
    padding: ${sizes.s8.rem};

    &[hidden] {
      display: none;
    }

    &:hover {
      background-color: ${lighten(0.1, colors.blackEvil)};
    }
  }
`;

export const Button = styled.button<{ type: "selectlist" }>`
  background: ${colors.greenGrass};
  color: ${colors.whiteGhost};
  cursor: pointer;
  transition-duration: 0.25s;

  width: 100%;
`;

export const SelectedOption = styled.span`
  ${optionStyles};

  figure {
    background: ${rgba(colors.blackEvil, 0.9)};
  }
`;

export const ListBox = styled.div`
  padding: 0;
`;

export const MenuIcon = styled.span`
  aspect-ratio: 1;
  background: ${colors.whiteGhost};
  clip-path: polygon(0 0, 100% 0, 100% 20%, 0 20%, 0 40%, 100% 40%, 100% 60%, 0 60%, 0 80%, 100% 80%, 100% 100%, 0 100%);
  display: flex;
  width: ${sizes.s24.rem};
`;

export const Option = styled.option`
  ${optionStyles};
  background-color: ${colors.blackEvil};
  padding: ${sizes.s8.rem};

  &[hidden] {
    display: none;
  }

  &:hover {
    background-color: ${lighten(0.1, colors.blackEvil)};
  }
`;

export const Figure = styled.figure`
  align-items: center;
  aspect-ratio: 1;
  border-radius: ${borderRadii.round};
  display: flex;
  justify-content: center;
  margin: 0;
  padding: ${sizes.s2.rem};
  overflow: hidden;
  position: relative;
  width: ${sizes.s24.rem};
`;
