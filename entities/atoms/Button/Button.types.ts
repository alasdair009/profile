import { HTMLAttributes, PointerEvent } from "react";

export type ButtonVariant = "standard" | "transparent";

export type ButtonProps = {
  onClick?: (e: PointerEvent<HTMLButtonElement>) => void;
  type: "submit" | "button";
  variant?: ButtonVariant;
} & HTMLAttributes<HTMLButtonElement>;
