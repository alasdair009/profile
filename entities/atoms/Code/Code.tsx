import { HTMLAttributes } from "react";
import styles from "./Code.module.css";
import { colors } from "@/styles/tokens";

type CodeProps = HTMLAttributes<HTMLSpanElement>;

/**
 * Source code in a monospaced box.
 */
export function Code({ children, ...rest }: CodeProps) {
  return (
    <code
      className={styles.root}
      color={colors.redHeat}
      data-testid={Code.name}
      {...rest}
    >
      {children}
    </code>
  );
}
