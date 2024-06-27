"use client";
import { Root } from "./styles";
import { BaseSelectProps } from "./BaseSelect.types";
import { useState } from "react";

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
    <Root
      $isInvalid={isInvalidState}
      onChange={() => handleOnChange()}
      data-testid={BaseSelect.name}
      {...rest}
    >
      {children}
    </Root>
  );
}
