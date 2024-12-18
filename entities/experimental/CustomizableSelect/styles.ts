import styled from "styled-components";
import { defaultFieldStyles } from "@/entities/atoms/BaseInput/styles";
import { clipPaths, colors, sizes } from "@/entities";

export const Root = styled.select`
  ${defaultFieldStyles(false)}

  appearance: base-select;
  padding: 0;

  &::picker(select) {
    appearance: base-select;
  }

  option {
    align-items: center;
    background: ${colors.greyDark};
    color: ${colors.whiteGhost};
    display: flex;
    padding: ${sizes.s8.rem};
    width: 100%;

    &:hover {
      filter: brightness(1.3);
    }

    &::marker,
    &::before {
      display: none;
    }
  }
`;

export const SelectArea = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100%;
`;

export const DropButton = styled.span`
  align-items: center;
  aspect-ratio: 1;
  background: ${colors.greenGrass};
  display: flex;
  height: 100%;
  justify-content: center;

  &:hover {
    filter: brightness(1.3);
  }

  &::before {
    aspect-ratio: 1;
    background: ${colors.whiteGhost};
    clip-path: ${clipPaths.chevronDown};
    content: "";
    height: ${sizes.s32.rem};
  }
`;

export const SelectedContent = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;
