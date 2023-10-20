import styled from "styled-components";
import {rem} from "polished";
import {colors} from "../../design-tokens/colors";
import {fonts} from "../../design-tokens/typography";
import {CSSProperties} from "react";
import {globalTextMaxWidth} from "../../design-tokens/dimensions";

export const Root = styled.p<{align: CSSProperties["textAlign"]}>`
  color: ${colors.whiteGhost};
  display: block;
  font-family: ${fonts.body};
  margin: 0 auto;
  max-width: ${rem(globalTextMaxWidth)};
  text-align: ${({align}) => align};
  width: 100%;
`;