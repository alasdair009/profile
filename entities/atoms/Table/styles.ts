"use client";
import styled from "styled-components";
import { Breakpoint, colors, device, globalContentMaxWidth, sizes } from "@/entities";
import { lighten, rem } from "polished";
import { breakpoints } from "@/entities/design-tokens/dimensions/dimensions";
import { typography } from "@storybook/theming";

export const Root = styled.table<{ $breakAt: Breakpoint }>`
  background: ${colors.blackEvil};
  border-collapse: collapse;
  margin: ${sizes.s16.rem} auto;
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
    position: relative;
  }

  th {
    font-weight: ${typography.weight.bold};
  }

  @media (max-width: ${({ $breakAt }) => breakpoints[$breakAt]}px) {
    table,
    thead,
    tbody,
    tfoot,
    th,
    td,
    tr {
      display: block;
    }

    thead,
    tfoot {
      background: none;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: ${rem(1)} solid ${lighten(0.5, colors.greyDark)};
    }

    td,
    th {
      border: none;
      border-bottom: ${rem(1)} solid ${colors.greyDark};
      padding-left: 50%;
      position: relative;
      text-align: left;
    }

    td::before,
    th::before {
      content: attr(data-title) ":";
      font-weight: ${typography.weight.bold};
      left: ${sizes.s8.rem};
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 45%;
      white-space: nowrap;
    }
  }
`;
