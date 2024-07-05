"use client";
import { Root } from "./styles";
import { HTMLAttributes, useState } from "react";

export type BaseCheckboxProps = {
  /**
   * If checking the box is required
   */
  required?: boolean;
  /**
   * If the checkbox should be displayed as invalid.
   */
  isInvalid?: boolean;
  /**
   * If the box is checked.
   */
  checked?: boolean;
  /**
   * Name of the checkbot input element.
   */
  name?: string;
} & HTMLAttributes<HTMLInputElement>;

/**
 * Base checkbox input element
 */
export function BaseCheckbox({
  isInvalid = false,
  ...rest
}: BaseCheckboxProps) {
  const [isInvalidState, setIsInvalidState] = useState(isInvalid);

  const handleOnChange = () => {
    setIsInvalidState(false);
  };

  return (
    <Root
      type="checkbox"
      $isInvalid={isInvalidState}
      onChange={() => handleOnChange()}
      data-testid={BaseCheckbox.name}
      {...rest}
    />
  );
}
