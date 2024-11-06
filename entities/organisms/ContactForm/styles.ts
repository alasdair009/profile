import styled from "styled-components";
import { globalInputMaxWidth, Paragraph, sizes } from "@/entities";
import { rem } from "polished";

export const Root = styled.form`
  margin: 0 auto;
  max-width: ${rem(globalInputMaxWidth)};
  padding: ${sizes.s8.rem};
  position: relative;
  width: 100%;
`;

export const InputWrapper = styled.div<{ $hasSubmitted: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: ${({ $hasSubmitted }) =>
    $hasSubmitted ? "translateX(100vw)" : "none"};
  transition: transform 0.5s;
  width: 100%;
`;

export const SubmittedMessage = styled(Paragraph)`
  align-items: center;
  display: flex;
  height: 100%;
  left: 0;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
`;
