import { CSSProperties } from "react";
import { toRem } from "../dimensions/utils";
import type { Dimension } from "../dimensions";
import { Property } from "csstype";
import { Inter } from "next/font/google";

type FontWeights = "regular" | "bold" | "black";
export const fontWeights: Record<FontWeights, number> = {
  regular: 400,
  bold: 700,
  black: 900,
};

export const interFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

type FontAreas = "body" | "heading" | "cta";

export type TextAlignment = "left" | "center" | "right";

export type HeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export const fonts: Record<FontAreas, CSSProperties["fontFamily"]> = {
  body: interFont.variable,
  heading: interFont.variable,
  cta: interFont.variable,
};

export type FontSizes =
  | "small"
  | "medium"
  | "mlarge"
  | "large"
  | "xlarge"
  | "xxlarge";
export const fontSizes: Record<
  FontSizes,
  { raw: number; px: Dimension; rem: Dimension }
> = {
  // small: sizes.s12,
  // medium: sizes.s16,
  // mlarge: sizes.s24,
  // large: sizes.s32,
  // xlarge: sizes.s40,
  // xxlarge: sizes.s64,
  small: {
    raw: 12,
    px: "12px",
    rem: toRem(12),
  },
  medium: {
    raw: 16,
    px: "16px",
    rem: toRem(16),
  },
  mlarge: {
    raw: 24,
    px: "24px",
    rem: toRem(24),
  },
  large: {
    raw: 32,
    px: "32px",
    rem: toRem(32),
  },
  xlarge: {
    raw: 40,
    px: "40px",
    rem: toRem(40),
  },
  xxlarge: {
    raw: 64,
    px: "64px",
    rem: toRem(64),
  },
};

export const headingSizes: Record<HeadingTypes, Property.FontSize> = {
  h1: fontSizes.xlarge.rem,
  h2: fontSizes.large.rem,
  h3: fontSizes.mlarge.rem,
  h4: fontSizes.mlarge.rem,
  h5: fontSizes.mlarge.rem,
  h6: fontSizes.mlarge.rem,
};

export const lineHeights: Record<HeadingTypes | "p", Property.LineHeight> = {
  h1: "1.4em",
  h2: "1.3em",
  h3: "1.2em",
  h4: "1.2em",
  h5: "1.2em",
  h6: "1.2em",
  p: "1.3em",
};
