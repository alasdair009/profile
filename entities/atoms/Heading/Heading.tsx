import {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";
import { colors, HeadingTypes, TextAlignment } from "@/entities";
import { Property } from "csstype";
import styles from "./Heading.module.scss";
import { lineHeights } from "@/entities/design-tokens/typography/typography";

export type HeadingProps<T extends ElementType> = {
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
export function Heading<T extends ElementType = "h1">({
  level = "h1",
  as,
  align = "left",
  color = colors.whiteGhost,
  textShadow = false,
  lines,
  children,
  style,
  ...rest
}: HeadingProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof HeadingProps<T>>) {
  const Root = as ? as : level;
  return (
    <Root
      className={`${styles.root} ${lines ? styles.rootClamp : ""} ${textShadow ? styles.Shadow : ""}`}
      $lines={lines}
      data-testid={Heading.name}
      style={
        {
          ...style,
          "--color": color,
          "--align": align,
          "--line-height": lineHeights.p,
          "--number-of-lines": lines,
          "--text-shadow": textShadow,
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </Root>
  );
}
