/**
 * A valid width entry that is not undefined or a number
 */
export type Dimension = Exclude<CSSProperties["width"], number | undefined>;

/**
 * Key names for screen width sizes
 */
export type Breakpoint =
  | "base"
  | "min"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "wide";
