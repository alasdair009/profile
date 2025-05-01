"use client";
import styles from "./BaseRange.module.scss";
import { ChangeEvent, HTMLAttributes, useEffect, useState } from "react";

type BaseRangeProps = {
  isInvalid?: boolean;
  min: number;
  max: number;
  value?: number;
} & HTMLAttributes<HTMLInputElement>;

/**
 * Base range input
 */
export function BaseRange({
  defaultValue,
  isInvalid = false,
  ...rest
}: BaseRangeProps) {
  const [isInvalidState, setIsInvalidState] = useState(isInvalid);
  const [value, setValue] = useState(defaultValue);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsInvalidState(false);
    setValue(e.target.value);
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <input
      className={`${styles.root} ${isInvalidState ? styles.rootStateInvalid : ""}`}
      onChange={handleOnChange}
      data-testid={BaseRange.name}
      type="range"
      value={value}
      {...rest}
    />
  );
}
