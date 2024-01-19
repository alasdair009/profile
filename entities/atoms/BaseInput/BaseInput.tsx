"use client";
import { Root } from "./styles";
import { BaseInputProps } from "./BaseInput.types";
import {useEffect, useState} from "react";

/**
 * Base input type
 */
export function BaseInput({ isInvalid = false, ...rest }: BaseInputProps) {
  const [hasBeenFocussed, setHasBeenFocussed] = useState(false);
  const [isInvalidState, setIsInvalidState] = useState(isInvalid);

  const handleOnChange = () => {
    setHasBeenFocussed(true);
    setIsInvalidState(false);
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {

    setIsClient(true);

  }, []);

  if (!isClient) return null;

  return (
    <Root
      $isInvalid={isInvalidState}
      $hasBeenFocussed={hasBeenFocussed}
      onChange={() => handleOnChange()}
      {...rest}
    />
  );
}
