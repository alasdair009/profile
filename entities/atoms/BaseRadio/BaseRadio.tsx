"use client";
import { HTMLAttributes, useState } from "react";
import styles from "./BaseRadio.module.css";

export type BaseRadioProps = {
  /**
   * If checking one of the radios is required.
   */
  required?: boolean;
  /**
   * If the radio should be displayed as invalid.
   */
  isInvalid?: boolean;
  /**
   * If the radio is checked.
   */
  checked?: boolean;
  /**
   * Name of the radio element.
   */
  name?: string;
} & HTMLAttributes<HTMLInputElement>;

/**
 * Base radio element
 */
export function BaseRadio({ isInvalid = false, ...rest }: BaseRadioProps) {
  const [isInvalidState, setIsInvalidState] = useState(isInvalid);

  const handleOnChange = () => {
    setIsInvalidState(false);
  };

  return (
    <input
      type="radio"
      className={`${styles.root} ${isInvalidState ? styles.rootStateInvalid : ""}`}
      onChange={() => handleOnChange()}
      data-testid={BaseRadio.name}
      {...rest}
    />
  );
}
