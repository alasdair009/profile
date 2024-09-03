"use client";

import styled from "styled-components";
import { colors, fontSizes, globalTextMaxWidth, sizes } from "@/entities";
import { rem } from "polished";
import { UnorderedListProps } from "@/entities/atoms/UnorderedList/UnorderedList.types";

export const Root = styled.ul<{ $align: UnorderedListProps["align"] }>`
  display: flex;
  flex-direction: column;
  gap: ${sizes.s8.rem};
  list-style: none;
  margin: 0 auto;
  max-width: ${rem(globalTextMaxWidth)};
  text-align: ${({ $align }) => $align};
  width: 100%;

  li {
    font-size: ${fontSizes.medium.rem};
    padding-left: ${sizes.s16.rem};
    position: relative;
    width: 100%;

    &::before {
      background: ${colors.whiteGhost};
      content: "";
      height: calc(100% - ${fontSizes.medium.rem});
      left: 0;
      min-height: ${fontSizes.medium.rem};
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: ${sizes.s2.rem};
    }
  }
`;
