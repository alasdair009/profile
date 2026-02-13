"use client";
import styles from "./BaseInput.module.css";
import { BaseInputProps } from "./BaseInput.types";
import { useState } from "react";

/**
 * Base input type
 */
export function BaseInput({ isInvalid = false, ...rest }: BaseInputProps) {
  const [isInvalidState, setIsInvalidState] = useState(isInvalid);

  const handleOnChange = () => {
    setIsInvalidState(false);
  };

  return (
    <input
      className={`${styles.root} ${isInvalidState ? styles.invalid : ""}`}
      onChange={() => handleOnChange()}
      data-testid={BaseInput.name}
      {...rest}
    />
  );
}
