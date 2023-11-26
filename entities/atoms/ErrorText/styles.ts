"use client";

import { colors, Paragraph } from "@/entities";
import styled from "styled-components";

export const Root = styled(Paragraph)<{ $shown: boolean }>`
  color: ${colors.redHeat};
  font-style: italic;
  display: ${({ $shown }) => ($shown ? "block" : "none")};
`;
