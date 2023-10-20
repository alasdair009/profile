import styled from "styled-components";
import {rem} from "polished";
import {sizes} from "../../design-tokens/dimensions";

export const Root = styled.br<{multiplier: number}>`
  content: "";
  display: block;
  margin-bottom: ${({ multiplier }) => rem(multiplier * sizes.s8.raw)};
`;