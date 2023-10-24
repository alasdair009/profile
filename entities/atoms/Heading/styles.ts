import styled from "styled-components";
import {CSSProperties} from "react";
import {globalTextMaxWidth, sizes} from "../../design-tokens/dimensions";
import {colors} from "../../design-tokens/colors";
import {rem} from "polished";
import {headingSizes, HeadingTypes} from "../../design-tokens/typography";

export const Root = styled.h1<{$level: HeadingTypes, $align: CSSProperties["textAlign"]}>`
  font-size: ${({$level}) => headingSizes[$level]};
  margin: 0 auto ${sizes.s24.rem};
  max-width: ${rem(globalTextMaxWidth)};
  padding-bottom: ${({$level}) => $level === "h1" ? sizes.s8.rem : 0};
  position: relative;
  text-align: ${({$align}) => $align};
  width: fit-content;
  
  &::after {
    background: ${colors.greenGrass};
    bottom: 0;
    content: "";
    display: ${({$level}) => $level === "h1" ? "block" : "none"};
    height: ${rem(3)};
    left: 0;
    position: absolute;
    transform: rotate(-2deg);
    width: 100%;
  }
`;