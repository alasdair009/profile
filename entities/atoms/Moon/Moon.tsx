import { HTMLAttributes } from "react";
import styles from "./Moon.module.css";

type MoonProps = {} & HTMLAttributes<HTMLDivElement>;

/**
 * Waxing moon rendered with CSS only.
 */
export function Moon({ className, ...rest }: MoonProps) {
  return (
    <span
      className={`${styles.root} ${className}`}
      data-testid={Moon.name}
      {...rest}
    />
  );
}
