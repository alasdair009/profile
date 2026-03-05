import { HTMLAttributes } from "react";
import styles from "./Sun.module.css";

type SunProps = HTMLAttributes<HTMLDivElement>;

/**
 * Sun rendered in CSS.
 */
export function Sun({ className, ...rest }: SunProps) {
  return (
    <span
      className={`${styles.root} ${className}`}
      data-testid={Sun.name}
      {...rest}
    />
  );
}
