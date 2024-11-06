"use client";

import styled from "styled-components";
import { borderRadii, colors, sizes } from "@/entities";
import { rem } from "polished";

export const Root = styled.input<{ $isInvalid: boolean }>`
  appearance: none;
  aspect-ratio: 1;
  background: ${colors.whiteGhost};
  border: ${rem(1)} solid ${colors.blackEvil};
  border-radius: ${borderRadii.round};
  box-shadow: 0 0 ${rem(2)} ${rem(3)} ${colors.blackEvil};
  width: ${sizes.s32.rem};

  &:checked {
    background: radial-gradient(
      ${colors.greenGrass} ${sizes.s8.rem},
      ${colors.whiteGhost} ${sizes.s8.rem},
      ${colors.whiteGhost}
    );
  }
`;
