import type { Breakpoint, Dimension } from "./types";
import { toRem } from "./utils";

/**
 * Maximum width that inputs should be set to.
 */
// export const globalInputMaxWidth = parseInt(variables.globalInputMaxWidth);

/**
 * Maximum width that text should be confined to.
 */
// export const globalTextMaxWidth = parseInt(variables.globalTextMaxWidth);

/**
 * Maximum width that content should extend to.
 */
// export const globalContentMaxWidth = parseInt(variables.globalContentMaxWidth);

/**
 * Maximum width decorative elements can stretch to on the screen.
 */
// export const globalDecorationMaxWidth = parseInt(
//   variables.globalDecorationMaxWidth
// );

/**
 * Breakpoints (px value) for JDS dimensions of viewport.
 *
 * Alternatively {@link @jagex/jds#device} can be used in the context of styles breakpoints.
 */
export const breakpoints: Record<string, number> = {
  base: 0,
  min: 320,
  xsmall: 640,
  small: 768,
  medium: 1024,
  large: 1200,
  xlarge: 1600,
  wide: 3440,
};

/**
 * Breakpoints as defined in {@link @jagex/jds#device}, for use in styles.
 */
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

// const sizeEntries: Record<string, number> = JSON.parse(
//   variables.sizes.replaceAll("'", "")
// );

export const sizes: Record<
  string,
  { raw: number; px: Dimension; rem: Dimension }
> = {
  s2: {
    raw: 2,
    px: `2px`,
    rem: toRem(2),
  },
  s4: {
    raw: 4,
    px: `${4}px`,
    rem: toRem(4),
  },
  s8: {
    raw: 8,
    px: `${8}px`,
    rem: toRem(8),
  },
  s12: {
    raw: 12,
    px: `${12}px`,
    rem: toRem(12),
  },
  s16: {
    raw: 16,
    px: `${16}px`,
    rem: toRem(16),
  },
  s24: {
    raw: 24,
    px: `${24}px`,
    rem: toRem(24),
  },
  s32: {
    raw: 32,
    px: `${32}px`,
    rem: toRem(32),
  },
  s36: {
    raw: 36,
    px: `${36}px`,
    rem: toRem(36),
  },
  s40: {
    raw: 40,
    px: `${40}px`,
    rem: toRem(40),
  },
  s48: {
    raw: 48,
    px: `${48}px`,
    rem: toRem(48),
  },
  s56: {
    raw: 56,
    px: `${56}px`,
    rem: toRem(56),
  },
  s64: {
    raw: 64,
    px: `${64}px`,
    rem: toRem(64),
  },
  s72: {
    raw: 72,
    px: `${72}px`,
    rem: toRem(72),
  },
  s80: {
    raw: 80,
    px: `${80}px`,
    rem: toRem(80),
  },
  s96: {
    raw: 96,
    px: `${96}px`,
    rem: toRem(96),
  },
  s128: {
    raw: 128,
    px: `${128}px`,
    rem: toRem(128),
  },
  s192: {
    raw: 192,
    px: `${192}px`,
    rem: toRem(192),
  },
  s256: {
    raw: 256,
    px: `${256}px`,
    rem: toRem(256),
  },
  s512: {
    raw: 512,
    px: `${512}px`,
    rem: toRem(512),
  },
  s1024: {
    raw: 1024,
    px: `${1024}px`,
    rem: toRem(1024),
  },
};
