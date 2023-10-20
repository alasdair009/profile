import styled from "styled-components";
import {rem} from "polished";
import {colors} from "../../design-tokens/colors";
import {fonts} from "../../design-tokens/typography";

export const Root = styled.p`
  color: ${colors.whiteGhost};
  display: block;
  font-family: ${fonts.body};
  margin: 0 auto;
  max-width: ${rem(1200)};
  width: 100%;
`;