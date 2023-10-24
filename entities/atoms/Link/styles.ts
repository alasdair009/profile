import Link from "next/link";
import styled from "styled-components";
import {colors} from "../../design-tokens/colors";
import {fontWeights} from "../../design-tokens/typography";
import {sizes} from "../../design-tokens/dimensions";
import {rem} from "polished";

const generatePolygonLine = (yOffset = 0) => {
    return `polygon(0 0, 30% ${yOffset * 0.9}%, 50% ${yOffset}%, 70% ${yOffset * 0.9}%, 100% 0, 100% 25%, 70% ${25 + yOffset * 0.9}%, 50% ${25 + yOffset}%, 30% ${25 + yOffset * 0.9}%, 0 25%)`;
}
export const Root = styled(Link)`
  color: ${colors.greenGrass};
  font-weight: ${fontWeights.bold};
  position: relative;
  text-decoration: none;

  &:hover {
    filter: brightness(1.3);
    
    &::after {
      clip-path: ${() => generatePolygonLine(50)};
    }
  }
  
  &:visited,
  &:active {
    color: ${colors.greenGrass};
  }
  
  &::after {
    background: ${colors.greenGrass};
    bottom: -${rem(6)};
    clip-path: ${() => generatePolygonLine()};
    content: "";
    height: ${sizes.s8.rem};
    left: 0;
    position: absolute;
    transition: clip-path 0.1s;
    width: 100%;
  }
`;