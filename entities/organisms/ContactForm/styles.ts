import styled from "styled-components";
import { globalInputMaxWidth, sizes } from "@/entities";
import { rem } from "polished";

export const Root = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: ${rem(globalInputMaxWidth)};
  padding: ${sizes.s8.rem};
  width: 100%;
`;
