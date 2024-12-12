"use client";

import styled from "styled-components";
import { globalInputMaxWidth } from "../../design-tokens/dimensions";
import { rem } from "polished";

export const Root = styled.label`
  display: block;
  max-width: ${rem(globalInputMaxWidth)};
  text-align: center;
  width: 100%;
`;
