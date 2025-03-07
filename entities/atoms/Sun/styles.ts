"use client";
import styled from "styled-components";
import { borderRadii, sizes } from "@/entities";

export const Root = styled.span`
  aspect-ratio: 1;
  background: radial-gradient(
    closest-side circle at center,
    hsl(4 5% 100% / 100%) 0%,
    hsl(4 5% 100% / 100%) 15%,
    hsl(4 10% 70% / 70%) 30%,
    hsl(4 0% 50% / 30%) 55%,
    hsl(4 0% 10% / 5%) 75%,
    transparent 99%
  );
  border-radius: ${borderRadii.round};
  display: inline-block;
  filter: blur(4px);
  min-height: ${sizes.s64.rem};
  min-width: ${sizes.s64.rem};
`;
