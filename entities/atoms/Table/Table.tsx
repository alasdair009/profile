import { CSSProperties, HTMLAttributes } from "react";
import styles from "./Table.module.css";

type TableProps = {
  /**
   * Below this breakpoint the table will render in a vertical view
   */
  breakAt?: CSSProperties["width"];
} & HTMLAttributes<HTMLTableElement>;

/**
 * Styled HTML table used to display data.
 */
export function Table({
  breakAt = 0,
  className,
  style,
  children,
  ...rest
}: TableProps) {
  return (
    <table
      className={`${styles.root} ${className}`}
      data-testid={Table.name}
      style={{ "--table-break": breakAt, ...style } as CSSProperties}
      {...rest}
    >
      {children}
    </table>
  );
}
