import styled from "styled-components";
import { fonts, fontSizes, fontWeights } from "../../design-tokens/typography";
import { Property } from "csstype";

export const Root = styled.div<{ maskFill: Property.Fill }>`
  display: flex;
  height: 100%;
  width: 100%;

  &::before,
  &::after {
    background: ${({ maskFill }) => maskFill};
    content: "";
    flex: 1;
  }
`;

export const Rect = styled.rect<{ maskFill: Property.Fill }>`
  fill: ${({ maskFill }) => maskFill};
  mask: url(#mask);
`;

export const Text = styled.text`
  alignment-baseline: middle;
  font-family: ${fonts.body};
  font-size: ${fontSizes.large.rem};
  font-weight: ${fontWeights.black};
  text-anchor: middle;
`;
