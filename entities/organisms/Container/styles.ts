import styled from "styled-components";
import { globalContentMaxWidth } from "../../design-tokens/dimensions";
import { rem } from "polished";

export const Root = styled.section`
  display: block;
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
  position: relative;
  width: 100%;
`;
