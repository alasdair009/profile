import styled from "styled-components";
import {CSSProperties} from "react";
import {globalTextMaxWidth} from "../../design-tokens/dimensions";
import {rem} from "polished";

export const Root = styled.h1<{align: CSSProperties["textAlign"]}>`
  margin: 0 auto;
  max-width: ${rem(globalTextMaxWidth)};
  text-align: ${({align}) => align};
  width: 100%;
`;