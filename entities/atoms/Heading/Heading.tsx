<<<<<<< HEAD
import { Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";
import { HeadingTypes, TextAlignment } from "../../design-tokens/typography";
import { colors } from "../../design-tokens/colors";
import { Property } from "csstype";

type HeadingProps = {
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
   * Color of the text
   */
  color?: Property.Color;
} & HTMLAttributes<HTMLHeadingElement>;
export function Heading({
  level = "h1",
  as,
  align = "left",
  color = colors.whiteGhost,
  children,
  ...rest
}: HeadingProps) {
  const headingAs = as ? as : level;
  return (
    <Root $color={color} $level={level} as={headingAs} $align={align} {...rest}>
      {children}
    </Root>
  );
}
=======
import {Root} from "./styles";
import {HTMLAttributes, ReactNode} from "react";
import {HeadingTypes, TextAlignment} from "../../design-tokens/typography";
import {colors} from "../../design-tokens/colors";
import {Property} from "csstype";

type HeadingProps = {
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
     * Color of the text
     */
    color?: Property.Color;
} & HTMLAttributes<HTMLHeadingElement>;
export function Heading({level = "h1", as, align = "left", color = colors.whiteGhost, children, ...rest}: HeadingProps) {
    const headingAs = as ? as : level;
    return <Root $color={color} $level={level} as={headingAs} $align={align} {...rest}>{children}</Root>
}
>>>>>>> 555e247e8d9dbc71ab18766334bc9fb5807fc753
