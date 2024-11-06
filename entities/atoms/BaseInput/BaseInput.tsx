"use client";
import { Root } from "./styles";
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

  return <Root $isInvalid={isInvalidState} onChange={() => handleOnChange()} data-testid={BaseInput.name} {...rest} />;
}
