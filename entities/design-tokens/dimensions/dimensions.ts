import variables from "./Dimensions.module.scss";
import type { Breakpoint, Dimension } from "./types";
import { toRem } from "./utils";

/**
 * Maximum width that inputs should be set to.
 */
export const globalInputMaxWidth = parseInt(variables.globalInputMaxWidth);

/**
 * Maximum width that text should be confined to.
 */
export const globalTextMaxWidth = parseInt(variables.globalTextMaxWidth);

/**
 * Maximum width that content should extend to.
 */
export const globalContentMaxWidth = parseInt(variables.globalContentMaxWidth);

/**
 * Maximum width decorative elements can stretch to on the screen.
 */
export const globalDecorationMaxWidth = parseInt(
  variables.globalDecorationMaxWidth
);

/**
 * Breakpoints (px value) for JDS dimensions of viewport.
 *
 * Alternatively {@link @jagex/jds#device} can be used in the context of styles breakpoints.
 */
export const breakpoints: Record<string, number> = JSON.parse(
  variables.breakpoints.replaceAll("'", "")
);

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

const sizeEntries: Record<string, number> = JSON.parse(
  variables.sizes.replaceAll("'", "")
);

export const sizes: Record<
  keyof typeof sizeEntries,
  { raw: number; px: Dimension; rem: Dimension }
> = {
  s2: {
    raw: sizeEntries.s2,
    px: `${sizeEntries.s2}px`,
    rem: toRem(sizeEntries.s2),
  },
  s4: {
    raw: sizeEntries.s4,
    px: `${sizeEntries.s4}px`,
    rem: toRem(sizeEntries.s4),
  },
  s8: {
    raw: sizeEntries.s8,
    px: `${sizeEntries.s8}px`,
    rem: toRem(sizeEntries.s8),
  },
  s12: {
    raw: sizeEntries.s12,
    px: `${sizeEntries.s12}px`,
    rem: toRem(sizeEntries.s12),
  },
  s16: {
    raw: sizeEntries.s16,
    px: `${sizeEntries.s16}px`,
    rem: toRem(sizeEntries.s16),
  },
  s24: {
    raw: sizeEntries.s24,
    px: `${sizeEntries.s24}px`,
    rem: toRem(sizeEntries.s24),
  },
  s32: {
    raw: sizeEntries.s32,
    px: `${sizeEntries.s32}px`,
    rem: toRem(sizeEntries.s32),
  },
  s36: {
    raw: sizeEntries.s36,
    px: `${sizeEntries.s36}px`,
    rem: toRem(sizeEntries.s36),
  },
  s40: {
    raw: sizeEntries.s40,
    px: `${sizeEntries.s40}px`,
    rem: toRem(sizeEntries.s40),
  },
  s48: {
    raw: sizeEntries.s48,
    px: `${sizeEntries.s48}px`,
    rem: toRem(sizeEntries.s48),
  },
  s56: {
    raw: sizeEntries.s56,
    px: `${sizeEntries.s56}px`,
    rem: toRem(sizeEntries.s56),
  },
  s64: {
    raw: sizeEntries.s64,
    px: `${sizeEntries.s64}px`,
    rem: toRem(sizeEntries.s64),
  },
  s72: {
    raw: sizeEntries.s72,
    px: `${sizeEntries.s72}px`,
    rem: toRem(sizeEntries.s72),
  },
  s80: {
    raw: sizeEntries.s80,
    px: `${sizeEntries.s80}px`,
    rem: toRem(sizeEntries.s80),
  },
  s96: {
    raw: sizeEntries.s96,
    px: `${sizeEntries.s96}px`,
    rem: toRem(sizeEntries.s96),
  },
  s128: {
    raw: sizeEntries.s128,
    px: `${sizeEntries.s128}px`,
    rem: toRem(sizeEntries.s128),
  },
  s192: {
    raw: sizeEntries.s192,
    px: `${sizeEntries.s192}px`,
    rem: toRem(sizeEntries.s192),
  },
  s256: {
    raw: sizeEntries.s256,
    px: `${sizeEntries.s256}px`,
    rem: toRem(sizeEntries.s256),
  },
  s512: {
    raw: sizeEntries.s512,
    px: `${sizeEntries.s512}px`,
    rem: toRem(sizeEntries.s512),
  },
  s1024: {
    raw: sizeEntries.s1024,
    px: `${sizeEntries.s1024}px`,
    rem: toRem(sizeEntries.s1024),
  },
};
