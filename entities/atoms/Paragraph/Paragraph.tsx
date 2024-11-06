import { Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";
import { colors, FontSizes, TextAlignment } from "@/entities";
import { Property } from "csstype";

type ParagraphProps = {
  /**
   * Horizontal alignment of the text.
   */
  align?: TextAlignment;
  /**
   * Colour of the text.
   */
  color?: Property.Color;
  /**
   * Size of the text.
   */
  fontSize?: FontSizes;
  /**
   * How to wrap the text across multiple lines.
   */
  textWrap?: "wrap" | "balance";
  /**
   * Number of lines the text is restricted to.
   */
  lines?: number;
  /**
   * Content to show
   */
  children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;

/**
 * Paragraph of text
 */
export function Paragraph({
  align = "left",
  color = colors.whiteGhost,
  fontSize = "medium",
  textWrap = "wrap",
  lines,
  children,
  ...rest
}: ParagraphProps) {
  return (
    <Root
      $align={align}
      $color={color}
      $fontSize={fontSize}
      $textWrap={textWrap}
      $lines={lines}
      data-testid={Paragraph.name}
      {...rest}
    >
      {children}
    </Root>
  );
}
