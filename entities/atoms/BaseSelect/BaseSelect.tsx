"use client";
import { BaseSelectProps } from "./BaseSelect.types";
import { useState } from "react";
import styles from "./BaseSelect.module.scss";

/**
 * Base select field
 */
export function BaseSelect({
  isInvalid = false,
  children,
  ...rest
}: BaseSelectProps) {
  const [isInvalidState, setIsInvalidState] = useState(isInvalid);

  const handleOnChange = () => {
    setIsInvalidState(false);
  };

  return (
    <select
      className={`${styles.root} ${isInvalidState ? styles.rootStateInvalid : ""}`}
      onChange={() => handleOnChange()}
      data-testid={BaseSelect.name}
      {...rest}
    >
      {children}
    </select>
  );
}
