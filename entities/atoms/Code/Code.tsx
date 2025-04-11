import { HTMLAttributes, ReactNode } from "react";
import { colors } from "@/entities";
import styles from "./Code.module.scss";

type CodeProps = HTMLAttributes<HTMLSpanElement>;

/**
 * Render source code in a monospaced box.
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
