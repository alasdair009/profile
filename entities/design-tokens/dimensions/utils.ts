import type { Dimension } from "./types";

/**
 * Converts a pixel value to rem.
 * @param value string with px or number for pixel size.
 */
export const toRem = (value: number | string): Dimension => {
  if (typeof value === "number") {
    return `${value / 16}rem`;
  }

  return `${parseInt(value.toString()) / 16}rem`;
};
