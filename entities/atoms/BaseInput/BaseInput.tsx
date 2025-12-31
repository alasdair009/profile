"use client";
import styles from "./BaseInput.module.css";
import { BaseInputProps } from "./BaseInput.types";
import { useEffect, useState } from "react";

/**
 * Base input type
 */
export function BaseInput({ isInvalid = false, ...rest }: BaseInputProps) {
  const [isInvalidState, setIsInvalidState] = useState(isInvalid);

  const handleOnChange = () => {
    setIsInvalidState(false);
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <input
      className={`${styles.root} ${isInvalidState ? styles.rootStateInvalid : ""}`}
      onChange={() => handleOnChange()}
      data-testid={BaseInput.name}
      {...rest}
    />
  );
}
