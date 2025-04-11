import { HTMLAttributes, ReactNode } from "react";
import styles from "./BlockQuote.module.scss";

type BlockQuoteProps = {
  /**
   * The citation for the quote
   */
  cite?: string;
  /**
   * Content of the quote
   */
  children: ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

/**
 * A large highlight of a short string.
 */
export function BlockQuote({ ...rest }: BlockQuoteProps) {
  return (
    <blockquote
      className={styles.root}
      data-testid={BlockQuote.name}
      {...rest}
    />
  );
}
