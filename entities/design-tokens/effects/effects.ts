import { rem } from "polished";
import { CSSProperties } from "react";

/**
 * Border radius values
 */
export const borderRadii: Record<string, CSSProperties["borderRadius"]> = {
  r4: rem(4),
  r8: rem(8),
  round: "50%",
};
