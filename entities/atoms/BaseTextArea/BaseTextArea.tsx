"use client";
import { Root } from "./styles";
import { HTMLAttributes, useState } from "react";

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
    <Root
      $isInvalid={isInvalidState}
      onChange={() => handleOnChange()}
      {...rest}
    />
  );
}
