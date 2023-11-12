import { Root } from "./styles";
import { BaseInputProps } from "./BaseInput.types";

/**
 * Base input type
 */
export function BaseInput({ ...rest }: BaseInputProps) {
  return <Root {...rest} />;
}
