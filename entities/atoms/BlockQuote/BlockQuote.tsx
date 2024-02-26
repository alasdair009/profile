import { Root } from "./styles";
import { HTMLAttributes } from "react";

/**
 * A large highlight of a short string.
 */
export function BlockQuote({ ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return <Root {...rest} />;
}
