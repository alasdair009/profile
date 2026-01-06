import { CSSProperties } from "react";

export type HeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

/**
 * A valid width entry that is not undefined or a number
 */
export type Dimension = Exclude<CSSProperties["width"], number | undefined>;

export type Breakpoint =
  | "base"
  | "min"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "wide";

export type FontSizes =
  | "small"
  | "medium"
  | "mlarge"
  | "large"
  | "xlarge"
  | "xxlarge";

export type TextAlignment = "left" | "center" | "right";
