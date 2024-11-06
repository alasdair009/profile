"use client";

import styled from "styled-components";
import { colors, device, globalContentMaxWidth, globalTextMaxWidth, Heading, sizes } from "@/entities";
import { rem } from "polished";
import Image from "next/image";

export const Root = styled.article`
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
  position: relative;
  width: 100%;
`;

export const ArticleHeading = styled(Heading)`
  max-width: ${sizes.s512.rem};
`;

export const ArticleDate = styled.time`
  display: block;
  font-style: italic;
  margin: 0 auto;
  max-width: ${rem(globalTextMaxWidth)};
  text-align: center;
`;

export const ArticleFigure = styled.figure`
  box-sizing: border-box;
  height: ${rem(320)};
  margin: 0 auto;
  max-width: calc(100% - ${sizes.s16.rem});
  position: relative;

  @media (${device.large}) {
    max-width: ${rem(globalTextMaxWidth)};
  }
`;

export const ArticleImage = styled(Image)`
  box-shadow:
    -${sizes.s48.rem} -${sizes.s48.rem} 0 -${sizes.s40.rem} ${colors.greenGrass},
    ${sizes.s48.rem} ${sizes.s48.rem} 0 -${sizes.s40.rem} ${colors.greenGrass};
  margin: ${sizes.s8.rem};
  max-width: calc(100% - ${sizes.s16.rem});
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: ${rem(globalTextMaxWidth)};
  overflow: hidden;
  padding: ${sizes.s8.rem};
  position: relative;
  width: 100%;
  word-break: break-word;

  iframe {
    max-width: ${rem(800)};
  }
`;
