import { UnorderedListProps } from "./UnorderedList.types";
import { CSSProperties } from "react";
import styles from "./UnorderedList.module.scss";

/**
 * HTML unordered list.
 */
export function UnorderedList({
  align = "left",
  children,
  style,
  ...rest
}: UnorderedListProps) {
  return (
    <ul
      className={styles.root}
      data-testid={UnorderedList.name}
      style={{ "--align": align, ...style } as CSSProperties}
      {...rest}
    >
      {children}
    </ul>
  );
}
