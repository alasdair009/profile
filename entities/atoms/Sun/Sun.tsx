import { HTMLAttributes } from "react";
import styles from "./Sun.module.css";

type SunProps = {
  /**
   * To render a lense flare on the screen.
   */
  lenseFlare?: boolean;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Sun rendered in CSS.
 */
export function Sun({ lenseFlare = false, className, ...rest }: SunProps) {
  return (
    <span
      className={`${styles.root} ${className}`}
      data-testid={Sun.name}
      {...rest}
    />
  );
}
