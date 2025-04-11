import { HTMLAttributes } from "react";
import styles from "./Moon.module.scss";

type MoonProps = {} & HTMLAttributes<HTMLDivElement>;

/**
 * Waxing moon rendered with CSS only.
 */
export function Moon({ ...rest }: MoonProps) {
  return <span className={styles.root} data-testid={Moon.name} {...rest} />;
}
