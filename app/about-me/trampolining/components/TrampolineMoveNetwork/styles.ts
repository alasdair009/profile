"use client";

import styled from "styled-components";
import { globalContentMaxWidth } from "@/entities";
import { rem } from "polished";

export const Root = styled.section`
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
  position: relative;
`;
