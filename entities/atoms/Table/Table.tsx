import { HTMLAttributes } from "react";
import { Breakpoint } from "@/entities";
import styles from "./Table.module.scss";

type TableProps = {
  /**
   * Below this breakpoint the table will render in a vertical view
   */
  breakAt?: Breakpoint;
} & HTMLAttributes<HTMLTableElement>;

const getTableClass = (breakAt: Breakpoint) => {
  switch (breakAt) {
    case "base":
      return styles.rootbase;
    case "min":
      return styles.rootmin;
    case "xsmall":
      return styles.rootxsmall;
    case "small":
      return styles.rootsmall;
    case "medium":
      return styles.rootmedium;
    case "large":
      return styles.rootlarge;
    case "xlarge":
      return styles.rootxlarge;
    case "wide":
      return styles.rootwide;
  }
};

/**
 * Styled HTML table used to display data.
 */
export function Table({ breakAt = "base", children, ...rest }: TableProps) {
  return (
    <table
      className={`${styles.root} ${getTableClass(breakAt)}`}
      data-testid={Table.name}
      {...rest}
    >
      {children}
    </table>
  );
}
