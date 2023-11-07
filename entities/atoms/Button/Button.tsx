import { Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";

type ButtonProps = {} & HTMLAttributes<HTMLButtonElement>;

/**
 * Clickable button for executing actions
 */
export function Button({ ...rest }: ButtonProps) {
  return <Root {...rest} />;
}
