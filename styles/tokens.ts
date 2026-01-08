import { CSSProperties } from "react";
import { toCssVars } from "@/styles/style-helpers";
import type { Breakpoint, HeadingTypes, FontSizes } from "./styles.types";

export const animationNames: Record<
  string,
  Exclude<CSSProperties["animationName"], undefined>
> = {
  fall: "fall",
  rise: "rise",
};

export const curves: Record<
  string,
  Exclude<CSSProperties["animationTimingFunction"], undefined>
> = {
  default: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  easeBoth: "cubic-bezier(0.77, 0.25, 0, 0.77)",
  flag: "cubic-bezier(0.16, 0.14, 0.82, 0.73)",
  linear: "cubic-bezier(0, 0, 1, 1)",
};

export const clipPaths: Record<
  string,
  Exclude<CSSProperties["clipPath"], undefined>
> = {
  arrowLeft: "polygon(0 50%, 100% 0, 100% 100%)",
  blinds: `polygon(
    0% 5%,
    100% 5%,
    100% 25%,
    0% 25%,
    0% 40%,
    100% 40%,
    100% 60%,
    0% 60%,
    0% 75%,
    100% 75%,
    100% 95%,
    0% 95%
)`,
  check: `polygon(
    28% 38%,
    41% 53%,
    75% 24%,
    86% 38%,
    40% 78%,
    15% 50%
)`,
  chevronDown: `polygon(
    25% 25%,
    50% 50%,
    75% 25%,
    75% 35%,
    50% 60%,
    25% 35%
)`,
  cross: `polygon(
    0 40%,
40% 40%,
40% 0,
60% 0,
60% 40%,
100% 40%,
100% 60%,
60% 60%,
60% 100%,
40% 100%,
40% 60%,
    0 60%
)`,
  newTab: `polygon(
    48.9% 30%,
    58.9% 20%,
    0% 20%,
    0% 100%,
    80% 100%,
    80% 41.1%,
    70% 51.1%,
    40% 67.1%,
    88.5% 18.5%,
    100% 30%,
    100% 0%,
    70% 0%,
    81.5% 11.5%,
    32.9% 60%,
    40% 67.1%,
    70% 51.1%,
    70% 90%,
    10% 90%,
    10% 30%
)`,
  snowflake: `polygon(
    52% 20%,
    52% 27%,
    56% 24%,
    59% 27%,
    52% 33%,
    52% 42%,
    60% 38%,
    62% 29%,
    66% 30%,
    65% 35%,
    71% 31%,
    73% 35%,
    67% 39%,
    72% 40%,
    71% 44%,
    62% 42%,
    54% 46%,
    62% 50%,
    71% 48%,
    72% 52%,
    68% 53%,
    73% 56%,
    71% 60%,
    65% 57%,
    66% 62%,
    62% 63%,
    59% 54%,
    52% 50%,
    52% 58%,
    59% 65%,
    56% 68%,
    52% 65%,
    52% 71%,
    48% 71%,
    48% 65%,
    44% 68%,
    41% 65%,
    48% 58%,
    48% 50%,
    40% 54%,
    38% 63%,
    34% 62%,
    35% 57%,
    29% 61%,
    27% 57%,
    33% 53%,
    28% 52%,
    29% 48%,
    39% 50%,
    45% 46%,
    38% 42%,
    29% 44%,
    28% 40%,
    33% 38%,
    27% 35%,
    29% 31%,
    35% 35%,
    34% 30%,
    38% 29%,
    40% 38%,
    48% 42%,
    48% 33%,
    41% 27%,
    44% 24%,
    48% 27%,
    48% 20%
)`,
  star4: `polygon(
    50% 0,
    60% 40%,
    100% 50%,
    60% 60%,
    50% 100%,
    40% 60%,
    0 50%,
40% 40%
)`,
  star5: `polygon(
    50% 0,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
)`,
};

export const colors: Record<
  string,
  Exclude<CSSProperties["color"], undefined>
> = {
  blackEvil: "#000",
  greyLight: "#656565",
  greyDark: "#222425",
  whiteGhost: "#fff",
  blueSea: "#3487f5",
  greenGrass: "#2e9b26",
  yellowSun: "#c5c527",
  redHeat: "#df1c41",
};

export const sizes: Record<`s${number}`, number> = {
  s2: 2,
  s4: 4,
  s8: 8,
  s12: 12,
  s16: 16,
  s24: 24,
  s32: 32,
  s40: 40,
  s48: 48,
  s56: 56,
  s64: 64,
  s72: 72,
  s80: 80,
  s96: 96,
  s128: 128,
  s192: 192,
  s256: 256,
  s512: 512,
  s1024: 1024,
};

export const globalSizes: Record<string, number> = {
  // Maximum width that inputs should be set to.
  inputMaxWidth: 480,

  // Maximum width that text should be confined to.
  textMaxWidth: 1200,

  // Maximum width that content should extend to.
  contentMaxWidth: 1600,

  // Maximum width decorative elements can stretch to on the screen.
  decorationMaxWidth: 3440,
  headerHeight: 48,
};

export const breakpoints: Record<Breakpoint, number> = {
  base: 0,
  min: 320,
  xsmall: 640,
  small: 768,
  medium: 1024,
  large: globalSizes.textMaxWidth,
  xlarge: globalSizes.contentMaxWidth,
  wide: globalSizes.decorationMaxWidth,
};

export const device: Record<
  Breakpoint,
  `min-width: ${(typeof breakpoints)[Breakpoint]}px`
> = {
  base: `min-width: ${breakpoints.base}px`,
  min: `min-width: ${breakpoints.min}px`,
  xsmall: `min-width: ${breakpoints.xsmall}px`,
  small: `min-width: ${breakpoints.small}px`,
  medium: `min-width: ${breakpoints.medium}px`,
  large: `min-width: ${breakpoints.large}px`,
  xlarge: `min-width: ${breakpoints.xlarge}px`,
  wide: `min-width: ${breakpoints.wide}px`,
};

const radiiInt: Record<
  `r${number}`,
  Exclude<CSSProperties["borderRadius"], undefined>
> = {
  r2: 2,
  r4: 4,
  r8: 8,
  r12: 12,
};

const radiiPer: Record<
  "round",
  Exclude<CSSProperties["borderRadius"], undefined>
> = {
  round: "50%",
};

export const radii: Record<
  keyof typeof radiiInt | keyof typeof radiiPer,
  Exclude<CSSProperties["borderRadius"], undefined>
> = {
  ...radiiInt,
  ...radiiPer,
};

export const shadows: Record<
  string,
  Exclude<CSSProperties["boxShadow"], undefined>
> = {
  boxGreen: "0 0 var(--size-s4) var(--size-s2) var(--color-green-grass)",
};

export const fontFamilies: Record<
  `font${string}`,
  Exclude<CSSProperties["fontFamily"], undefined>
> = {
  fontInter: "inter, serif",
};

export const fontSizes: Record<
  FontSizes,
  Exclude<CSSProperties["fontSize"], undefined>
> = {
  small: sizes.s12,
  medium: sizes.s16,
  mlarge: sizes.s24,
  large: sizes.s32,
  xlarge: sizes.s40,
  xxlarge: sizes.s64,
};

export const headingSizes: Record<
  HeadingTypes,
  Exclude<CSSProperties["fontSize"], undefined>
> = {
  h1: fontSizes.xlarge,
  h2: fontSizes.large,
  h3: fontSizes.mlarge,
  h4: fontSizes.mlarge,
  h5: fontSizes.mlarge,
  h6: fontSizes.mlarge,
};

export const lineHeights: Record<
  HeadingTypes | "p",
  Exclude<CSSProperties["lineHeight"], undefined>
> = {
  h1: "1.4em",
  h2: "1.3em",
  h3: "1.2em",
  h4: "1.2em",
  h5: "1.2em",
  h6: "1.2em",
  p: "1.3em",
};

export const fontWeights: Record<"regular" | "bold" | "black", number> = {
  regular: 400,
  bold: 700,
  black: 900,
};

export const allTokens = {
  ...toCssVars(animationNames, "animation-name"),
  ...toCssVars(curves, "curve"),
  ...toCssVars(clipPaths, "clip-path"),
  ...toCssVars(colors, "color"),
  ...toCssVars(sizes, "size", { unit: "rem" }),
  ...toCssVars(globalSizes, "global", { unit: "rem" }),
  ...toCssVars(breakpoints, "breakpoint", { unit: "px" }),
  ...toCssVars(radiiInt, "radii", { unit: "rem" }),
  ...toCssVars(radiiPer, "radii"),
  ...toCssVars(shadows, "shadow"),
  ...toCssVars(fontFamilies, "font-family"),
  ...toCssVars(headingSizes, "heading-size", { unit: "rem" }),
  ...toCssVars(lineHeights, "line-height"),
  ...toCssVars(fontSizes, "font-size", { unit: "rem" }),
  ...toCssVars(fontWeights, "font-weight"),
};
