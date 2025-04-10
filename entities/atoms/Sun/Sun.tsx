import { HTMLAttributes } from "react";
import styles from "./Sun.module.scss";

type SunProps = {
  /**
   * To render a lense flare on the screen.
   */
  lenseFlare?: boolean;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Sun rendered in CSS.
 */
export function Sun({ lenseFlare = false, ...rest }: SunProps) {
  return <span className={styles.root} data-testid={Sun.name} {...rest} />;
}
