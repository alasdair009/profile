"use client";
import styled from "styled-components";
import { globalContentMaxWidth, sizes } from "../../design-tokens/dimensions";
import { rem } from "polished";
import Image from "next/image";

export const Root = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
  position: relative;
  width: 100%;
`;

export const TrampolineImage = styled(Image)`
  margin: 0 auto;
  max-width: ${sizes.s512.rem};
  width: 100%;
`;
