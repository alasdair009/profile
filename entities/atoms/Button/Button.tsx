import { Root } from "./styles";
import { HTMLAttributes, PointerEvent } from "react";

type ButtonProps = {
  onClick?: (e: PointerEvent<HTMLButtonElement>) => void;
  type: "submit" | "button";
} & HTMLAttributes<HTMLButtonElement>;

/**
 * Clickable button for executing actions
 */
export function Button({ ...rest }: ButtonProps) {
  return <Root {...rest} />;
}
