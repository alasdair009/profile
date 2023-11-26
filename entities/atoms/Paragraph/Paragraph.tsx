import { Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";
import { colors, FontSizes, TextAlignment } from "@/entities";
import { Property } from "csstype";

type ParagraphProps = {
  align?: TextAlignment;
  color?: Property.Color;
  fontSize?: FontSizes;
  children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;
export function Paragraph({
  align = "left",
  color = colors.whiteGhost,
  fontSize = "medium",
  children,
  ...rest
}: ParagraphProps) {
  return (
    <Root $align={align} $color={color} $fontSize={fontSize} {...rest}>
      {children}
    </Root>
  );
}
