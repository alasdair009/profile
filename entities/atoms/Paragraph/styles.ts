import styled from "styled-components";
import {rem} from "polished";
import {colors} from "../../design-tokens/colors";
import {fonts, fontSizes, FontSizes} from "../../design-tokens/typography";
import {globalTextMaxWidth} from "../../design-tokens/dimensions";
import {Property} from "csstype";

export const Root = styled.p<{$fontSize: FontSizes, $align: Property.TextAlign}>`
  color: ${colors.whiteGhost};
  display: block;
  font-family: ${fonts.body};
  font-size: ${({$fontSize}) => fontSizes[$fontSize].rem};
  margin: 0 auto;
  max-width: ${rem(globalTextMaxWidth)};
  text-align: ${({$align}) => $align};
  width: 100%;
`;