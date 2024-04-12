"use client";
import styled from "styled-components";
import { colors, globalContentMaxWidth, sizes } from "@/entities";
import { rem } from "polished";

export const Root = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
  vertical-align: middle;
  width: 100%;

  thead,
  tfoot {
    background: ${colors.greenGrass};
  }

  td {
    border: ${rem(1)} solid ${colors.greyDark};
    padding: ${sizes.s8.rem};
  }
`;
