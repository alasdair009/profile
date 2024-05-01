import { Root } from "./styles";
import { HTMLAttributes } from "react";
import { Breakpoint } from "@/entities";

type TableProps = {
  /**
   * Below this breakpoint the table will render in a vertical view
   */
  breakAt?: Breakpoint;
} & HTMLAttributes<HTMLTableElement>;

/**
 * Rotating icon used to indicate something is loading or waiting.
 */
export function Table({ breakAt = "base", children, ...rest }: TableProps) {
  return (
    <Root $breakAt={breakAt} {...rest}>
      {children}
    </Root>
  );
}
