import { Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";
import { colors, HeadingTypes, TextAlignment } from "@/entities";
import { Property } from "csstype";

export type HeadingProps = {
  /**
   * Visual style of the Heading.
   */
  level?: HeadingTypes;
  /**
   * Heading element level.
   */
  as?: HeadingTypes;
  /**
   * Contents of the heading.
   */
  children: ReactNode;
  /**
   * Text alignment of the heading.
   */
  align?: TextAlignment;
  /**
   * Color of the text.
   */
  color?: Property.Color;
  /**
   * Apply a subtle shadow behind the text.
   */
  textShadow?: boolean;
  /**
   * Number of lines the text is restricted to.
   */
  lines?: number;
} & HTMLAttributes<HTMLHeadingElement>;

/**
 * Text displayed in a heading at a customisable level visually and semantically.
 */
export function Heading({
  level = "h1",
  as,
  align = "left",
  color = colors.whiteGhost,
  textShadow = false,
  lines,
  children,
  ...rest
}: HeadingProps) {
  const headingAs = as ? as : level;
  return (
    <Root
      $color={color}
      $level={level}
      as={headingAs}
      $align={align}
      $textShadow={textShadow}
      $lines={lines}
      data-testid={Heading.name}
      {...rest}
    >
      {children}
    </Root>
  );
}
