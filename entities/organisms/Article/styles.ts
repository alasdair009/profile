"use client";

import styled from "styled-components";
import {
  globalContentMaxWidth,
  globalTextMaxWidth,
  Heading,
  sizes,
} from "@/entities";
import { rem } from "polished";

export const Root = styled.article`
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
  position: relative;
  width: 100%;
`;

export const ArticleHeading = styled(Heading)`
  max-width: ${sizes.s512.rem};
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: ${rem(globalTextMaxWidth)};
  overflow: hidden;
  position: relative;
  width: 100%;
  word-break: break-word;

  iframe {
    max-width: ${rem(800)};
  }
`;
