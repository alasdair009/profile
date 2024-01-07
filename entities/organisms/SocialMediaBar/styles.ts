"use client"

import styled from "styled-components";
import {globalContentMaxWidth, sizes} from "@/entities";
import {rem} from "polished";

export const Root = styled.nav`
  align-items: center;
  display: flex;
  gap: ${sizes.s8.rem};
  justify-content: center;
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
  width: 100%;
`;