import { Root } from "./styles";
import { HTMLAttributes } from "react";

type TableProps = HTMLAttributes<HTMLTableElement>;

/**
 * Rotating icon used to indicate something is loading or waiting.
 */
export function Table({ children, ...rest }: TableProps) {
  return <Root {...rest}>{children}</Root>;
}
