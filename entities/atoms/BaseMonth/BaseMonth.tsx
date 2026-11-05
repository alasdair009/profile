"use client";
import styles from "./BaseMonth.module.css";
import type { BaseMonthProps } from "./BaseMonth.types";
import { useState } from "react";

/**
 * Base input month element
 */
export function BaseMonth({
  min,
  max,
  isInvalid = false,
  ...rest
}: BaseMonthProps) {
  const [isInvalidState, setIsInvalidState] = useState(isInvalid);

  const handleOnChange = () => {
    setIsInvalidState(false);
  };

  return (
    <input
      className={`${styles.root} ${isInvalidState ? styles.invalid : ""}`}
      type="month"
      min={min}
      max={max}
      onChange={() => handleOnChange()}
      data-testid={BaseMonth.displayName}
      {...rest}
    />
  );
}
BaseMonth.displayName = "BaseMonth";
