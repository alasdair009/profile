import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import {
  colors,
  fontSizes,
  FontSizes,
  lineHeights,
  sizes,
  TextAlignment,
} from "@/entities";
import { Property } from "csstype";
import styles from "./Paragraph.module.scss";

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
  /**
   *
   */
  margin?: CSSProperties["margin"];
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
  className,
  children,
  margin = `0 auto ${sizes.s24.rem}`,
  style,
  ...rest
}: ParagraphProps) {
  const fontSizeToRender = fontSizes[fontSize].rem;

  return (
    <p
      className={`${styles.root} ${lines ? styles.rootClamp : ""} ${className}`}
      data-testid={Paragraph.name}
      style={
        {
          "--font-size": fontSizeToRender,
          "--text-align": align,
          "--line-height": lineHeights.p,
          "--vertical-padding": 0,
          "--text-wrap": textWrap,
          "--color": color,
          "--number-of-lines": lines,
          "--margin": margin,
          ...style,
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </p>
  );
}
