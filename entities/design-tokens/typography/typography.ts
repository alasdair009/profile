import {CSSProperties} from "react";
import {Dimension, sizes} from "../dimensions";

const OPEN_SANS: CSSProperties["fontFamily"] = '"OpenSans","Arial",sans-serif';

type FontAreas = "body" | "heading" | "cta";

export type TextAlignment = "left" | "center" | "right";
export const fonts: Record<FontAreas, CSSProperties["fontFamily"]> = {
    body: OPEN_SANS,
    heading: OPEN_SANS,
    cta: OPEN_SANS,
}

type FontSizes = "small" | "medium" | "large";
export const fontSizes: Record<FontSizes, { raw: number; px: Dimension; rem: Dimension }> = {
    small: sizes.s12,
    medium: sizes.s16,
    large: sizes.s32,
}

type FontWeights = "regular" | "bold";
export const fontWeights: Record<FontWeights, number> = {
    regular: 400,
    bold: 700,
}