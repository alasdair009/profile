"use client";
import { HTMLAttributes, useState } from "react";
import styles from "./BaseTextArea.module.scss";

type BaseTextAreaProps = {
  required?: boolean;
  isInvalid?: boolean;
} & HTMLAttributes<HTMLTextAreaElement>;

/**
 * Base input type
 */
export function BaseTextArea({
  isInvalid = false,
  ...rest
}: BaseTextAreaProps) {
  const [isInvalidState, setIsInvalidState] = useState(isInvalid);

  const handleOnChange = () => {
    setIsInvalidState(false);
  };

  return (
    <textarea
      className={`${styles.root} ${isInvalidState ? styles.rootStateInvalid : ""}`}
      onChange={() => handleOnChange()}
      {...rest}
    />
  );
}
