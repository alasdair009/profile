"use client";
import styles from "./BaseDate.module.css";
import type { BaseDateProps } from "./BaseDate.types";
import { useEffect, useState } from "react";

const formatDateForInput = (date: Date, withTime = false) => {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dateString = `${date.getFullYear()}-${month}-${day}`;
  const time = withTime
    ? `T${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`
    : ``;
  return `${dateString}${time}`;
};

/**
 * Base input type
 */
export function BaseDate({
  type = "date",
  min,
  max,
  isInvalid = false,
  ...rest
}: BaseDateProps) {
  const [isInvalidState, setIsInvalidState] = useState(isInvalid);

  const handleOnChange = () => {
    setIsInvalidState(false);
  };

  const minValue = min
    ? formatDateForInput(min, type === "datetime-local")
    : undefined;
  const maxValue = max
    ? formatDateForInput(max, type === "datetime-local")
    : undefined;

  return (
    <input
      className={`${styles.root} ${isInvalidState ? styles.invalid : ""}`}
      type={type}
      min={minValue}
      max={maxValue}
      onChange={() => handleOnChange()}
      data-testid={BaseDate.name}
      {...rest}
    />
  );
}
