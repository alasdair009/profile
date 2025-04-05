import { rem } from "polished";
import { CSSProperties } from "react";
import variables from "./Effects.module.scss";

/**
 * Border radius values
 */
export const borderRadii: Record<string, CSSProperties["borderRadius"]> =
  JSON.parse(variables.borderRadii.replaceAll("'", ""));
