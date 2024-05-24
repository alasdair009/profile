import { Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";

type BlockQuoteProps = {
  /**
   * Content of the quote
   */
  children: ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

/**
 * A large highlight of a short string.
 */
export function BlockQuote({ ...rest }: BlockQuoteProps) {
  return <Root data-testid={BlockQuote.name} {...rest} />;
}
