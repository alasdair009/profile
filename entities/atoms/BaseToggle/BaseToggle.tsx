"use client";
import { HTMLAttributes } from "react";
import styles from "./BaseToggle.module.css";

export type BaseToggleProps = {
  /**
   * If the box is checked.
   */
  checked?: boolean;
  /**
   * Name of the checkbot input element.
   */
  name?: string;
} & HTMLAttributes<HTMLInputElement>;

/**
 * Base checkbox styled as a toggle switch.
 */
export function BaseToggle({ checked = false, ...rest }: BaseToggleProps) {
  return (
    <input
      className={styles.root}
      type="checkbox"
      data-testid={BaseToggle.displayName}
      defaultChecked={checked}
      {...rest}
    />
  );
}
BaseToggle.displayName = "BaseToggle";
