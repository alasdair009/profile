"use client";

import styled from "styled-components";
import { globalContentMaxWidth, sizes } from "@/entities";
import { rem } from "polished";

export const Root = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: ${sizes.s32.rem};
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
  padding: ${sizes.s8.rem};
  width: 100%;
`;
