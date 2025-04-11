"use client";
import { HTMLAttributes, useState } from "react";
import styles from "./BaseCheckbox.module.scss";

export type BaseCheckboxProps = {
  /**
   * If checking the box is required
   */
  required?: boolean;
  /**
   * If the checkbox should be displayed as invalid.
   */
  isInvalid?: boolean;
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
 * Base checkbox input element
 */
export function BaseCheckbox({
  isInvalid = false,
  ...rest
}: BaseCheckboxProps) {
  const [isInvalidState, setIsInvalidState] = useState(isInvalid);

  const handleOnChange = () => {
    setIsInvalidState(false);
  };

  return (
    <input
      className={`${styles.root} ${isInvalidState ? styles.isInvalid : ""}`}
      type="checkbox"
      onChange={() => handleOnChange()}
      data-testid={BaseCheckbox.name}
      {...rest}
    />
  );
}
