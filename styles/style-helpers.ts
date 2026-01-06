import { Dimension } from "./styles.types";

type AnyDict = Record<string, string | number>;
type Options = {
  unit?: "px" | "rem" | "raw";
  transformValue?: (key: string, value: string | number) => string; // per-key override
};

const kebab = (s: string) => s.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());

export function toCssVars(obj: AnyDict, prefix: string, opts: Options = {}) {
  const { unit = "raw", transformValue } = opts;
  const out: Record<string, string> = {};

  for (const [k, v] of Object.entries(obj)) {
    const name = `--${prefix}-${kebab(k)}`;
    let val: string;

    if (transformValue) {
      val = transformValue(k, v);
    } else if (typeof v === "number") {
      if (unit === "px") val = `${v}px`;
      else if (unit === "rem")
        val = `${(v / 16).toFixed(4).replace(/\.?0+$/, "")}rem`;
      else val = String(v);
    } else {
      val = v;
    }
    out[name] = val;
  }
  return out;
}

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
