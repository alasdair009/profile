import styled from "styled-components";
import {rem, rgba} from "polished";
import {colors} from "../../design-tokens/colors";
import {globalContentMaxWidth, globalDecorationMaxWidth, sizes} from "../../design-tokens/dimensions";
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