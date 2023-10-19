import {CSSProperties} from "react";
import {rem} from "polished";

const sizeEntries: Record<string, number> = {
    s2: 2,
    s4: 4,
    s8: 8,
    s12: 12,
    s16: 16,
    s24: 24,
    s32: 32,
    s36: 36,
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

/**
 * A valid width entry that is not undefined or a number
 */
export type Dimension = Exclude<CSSProperties["width"], number | undefined>;

export const sizes: Record<
    keyof typeof sizeEntries,
    { raw: number; px: Dimension; rem: Dimension }
> = {
    s2: { raw: sizeEntries.s2, px: `${sizeEntries.s2}px`, rem: rem(sizeEntries.s2) },
    s4: { raw: sizeEntries.s4, px: `${sizeEntries.s4}px`, rem: rem(sizeEntries.s4) },
    s8: { raw: sizeEntries.s8, px: `${sizeEntries.s8}px`, rem: rem(sizeEntries.s8) },
    s12: { raw: sizeEntries.s12, px: `${sizeEntries.s12}px`, rem: rem(sizeEntries.s12) },
    s16: { raw: sizeEntries.s16, px: `${sizeEntries.s16}px`, rem: rem(sizeEntries.s16) },
    s24: { raw: sizeEntries.s24, px: `${sizeEntries.s24}px`, rem: rem(sizeEntries.s24) },
    s32: { raw: sizeEntries.s32, px: `${sizeEntries.s32}px`, rem: rem(sizeEntries.s32) },
    s36: { raw: sizeEntries.s36, px: `${sizeEntries.s36}px`, rem: rem(sizeEntries.s36) },
    s40: { raw: sizeEntries.s40, px: `${sizeEntries.s40}px`, rem: rem(sizeEntries.s40) },
    s48: { raw: sizeEntries.s48, px: `${sizeEntries.s48}px`, rem: rem(sizeEntries.s48) },
    s56: { raw: sizeEntries.s56, px: `${sizeEntries.s56}px`, rem: rem(sizeEntries.s56) },
    s64: { raw: sizeEntries.s64, px: `${sizeEntries.s64}px`, rem: rem(sizeEntries.s64) },
    s72: { raw: sizeEntries.s72, px: `${sizeEntries.s72}px`, rem: rem(sizeEntries.s72) },
    s80: { raw: sizeEntries.s80, px: `${sizeEntries.s80}px`, rem: rem(sizeEntries.s80) },
    s96: { raw: sizeEntries.s96, px: `${sizeEntries.s96}px`, rem: rem(sizeEntries.s96) },
    s128: { raw: sizeEntries.s128, px: `${sizeEntries.s128}px`, rem: rem(sizeEntries.s128) },
    s192: { raw: sizeEntries.s192, px: `${sizeEntries.s192}px`, rem: rem(sizeEntries.s192) },
    s256: { raw: sizeEntries.s256, px: `${sizeEntries.s256}px`, rem: rem(sizeEntries.s256) },
    s512: { raw: sizeEntries.s512, px: `${sizeEntries.s512}px`, rem: rem(sizeEntries.s512) },
    s1024: { raw: sizeEntries.s1024, px: `${sizeEntries.s1024}px`, rem: rem(sizeEntries.s1024) },
};
