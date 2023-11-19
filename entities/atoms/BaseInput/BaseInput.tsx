import { Root } from "./styles";
import { BaseInputProps } from "./BaseInput.types";
import {useState} from "react";

/**
 * Base input type
 */
export function BaseInput({ isInvalid = false, ...rest }: BaseInputProps) {
  const [hasBeenFocussed, setHasBeenFocussed] = useState(false);
  const [isInvalidState, setIsInvalidState] = useState(isInvalid);

  const handleOnChange = () => {
    setHasBeenFocussed(true);
    setIsInvalidState(false);
  }

  return <Root $isInvalid={isInvalidState} $hasBeenFocussed={hasBeenFocussed} onChange={() => handleOnChange()} {...rest} />;
}
