import { HTMLAttributes, ReactNode } from "react";
import styles from "./BlockQuote.module.css";
import { Link } from "@/entities";

type BlockQuoteProps = {
  /**
   * Citation source
   */
  citeUrl?: string;
  /**
   * Citation string to render.
   */
  citeTitle?: string;
  /**
   * Content of the quote
   */
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/**
 * A large highlight of a short string.
 */
export function BlockQuote({
  citeUrl,
  citeTitle,
  className = "",
  children,
  ...rest
}: BlockQuoteProps) {
  return (
    <div
      className={`${styles.root} ${className}`}
      data-testid={BlockQuote.displayName}
      {...rest}
    >
      <blockquote cite={citeUrl} className={styles.blockQuote}>
        {children}
      </blockquote>
      {citeUrl && citeTitle && (
        <cite className={styles.cite}>
          <Link className={styles.citeLink} href={citeUrl}>
            {citeTitle}
          </Link>
        </cite>
      )}
    </div>
  );
}
BlockQuote.displayName = "BlockQuote";
