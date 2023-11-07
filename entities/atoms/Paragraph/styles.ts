import styled from "styled-components";
<<<<<<< HEAD
import { rem } from "polished";
import { colors } from "../../design-tokens/colors";
import { sizes } from "../../design-tokens/dimensions";
import { fonts, fontSizes, FontSizes } from "../../design-tokens/typography";
import { globalTextMaxWidth } from "../../design-tokens/dimensions";
import { Property } from "csstype";
=======
import {rem} from "polished";
import {colors} from "../../design-tokens/colors";
import {sizes} from "../../design-tokens/dimensions";
import {fonts, fontSizes, FontSizes} from "../../design-tokens/typography";
import {globalTextMaxWidth} from "../../design-tokens/dimensions";
import {Property} from "csstype";
>>>>>>> 555e247e8d9dbc71ab18766334bc9fb5807fc753

export const Root = styled.p<{
  $fontSize: FontSizes;
  $align: Property.TextAlign;
}>`
  color: ${colors.whiteGhost};
  display: block;
  font-family: ${fonts.body};
<<<<<<< HEAD
  font-size: ${({ $fontSize }) => fontSizes[$fontSize].rem};
=======
  font-size: ${({$fontSize}) => fontSizes[$fontSize].rem};
>>>>>>> 555e247e8d9dbc71ab18766334bc9fb5807fc753
  margin: 0 auto ${sizes.s24.rem};
  max-width: ${rem(globalTextMaxWidth)};
  text-align: ${({ $align }) => $align};
  width: 100%;
`;
