import { Root } from "./styles";
import { ButtonProps } from "@/entities/atoms/Button/Button.types";

/**
 * Clickable button for executing actions
 */
export function Button({ variant = "standard", ...rest }: ButtonProps) {
  return <Root $variant={variant} {...rest} />;
}
