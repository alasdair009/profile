"use client";
import styles from "./BaseFile.module.css";
import { BaseFileProps } from "./BaseFile.types";
import { useEffect, useState } from "react";

/**
 * Base file input.
 */
export function BaseFile({
  isInvalid = false,
  className,
  ...rest
}: BaseFileProps) {
  const [isInvalidState, setIsInvalidState] = useState(isInvalid);

  const handleOnChange = () => {
    setIsInvalidState(false);
  };

  return (
    <input
      className={`${styles.root} ${isInvalidState ? styles.rootStateInvalid : ""} ${className}`}
      onChange={() => handleOnChange()}
      data-testid={BaseFile.name}
      type="file"
      {...rest}
    />
  );
}
