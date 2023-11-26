"use client";
import styled from "styled-components";
import { rem, rgba } from "polished";
import {
  colors,
  globalContentMaxWidth,
  globalDecorationMaxWidth,
  Link,
  sizes,
} from "@/entities";
import Image from "next/image";

export const headerHeight = sizes.s48.rem;

export const Root = styled.header`
  background: ${rgba(colors.greyDark, 0.5)};
  border-bottom: ${sizes.s2.rem} solid ${rgba(colors.greenGrass, 0.25)};
  display: block;
  height: ${headerHeight};
  margin: 0 auto;
  max-width: ${rem(globalDecorationMaxWidth)};
  padding: ${sizes.s8.rem};
  position: sticky;
  width: 100%;
`;

export const Inner = styled.nav`
  display: flex;
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
  width: 100%;
`;

export const HeaderLogo = styled(Image)`
  &:hover {
    filter: brightness(1.3);
  }
`;

export const HeaderLinks = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  gap: ${sizes.s16.rem};
  height: 100%;
  justify-content: flex-end;
`;

export const HeaderLink = styled(Link)`
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  justify-content: center;
  padding-top: ${sizes.s4.rem};
`;
