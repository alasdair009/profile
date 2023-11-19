import { Root } from "./styles";
import {HTMLAttributes, useState} from "react";

type BaseTextAreaProps = {
  required?: boolean;
  isInvalid?: boolean;
} & HTMLAttributes<HTMLTextAreaElement>;

/**
 * Base input type
 */
export function BaseTextArea({ isInvalid = false, ...rest }: BaseTextAreaProps) {
  const [hasBeenFocussed, setHasBeenFocussed] = useState(false);
  const [isInvalidState, setIsInvalidState] = useState(isInvalid);

  const handleOnChange = () => {
    setHasBeenFocussed(true);
    setIsInvalidState(false);
  }

  return <Root $isInvalid={isInvalidState} $hasBeenFocussed={hasBeenFocussed} onChange={() => handleOnChange()} {...rest} />;
}
