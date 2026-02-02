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

const colorKeys = [
  "blackEvil",
  "greyLight",
  "greyDark",
  "whiteGhost",
  "blueSea",
  "greenGrass",
  "yellowSun",
  "redHeat",
] as const;
export type ColorKey = (typeof colorKeys)[number];

const sizeKeys = [
  "s2",
  "s4",
  "s8",
  "s12",
  "s16",
  "s24",
  "s32",
  "s40",
  "s48",
  "s56",
  "s64",
  "s72",
  "s80",
  "s96",
  "s128",
  "s192",
  "s256",
  "s512",
  "s1024",
] as const;
export type SizeKey = (typeof sizeKeys)[number];
