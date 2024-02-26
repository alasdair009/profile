import { HTMLAttributes, PointerEvent } from "react";

export type ButtonVariant = "standard" | "transparent";

export type ButtonProps = {
  /**
   * Action to perform when the button is clicked.
   */
  onClick?: (e: PointerEvent<HTMLButtonElement>) => void;
  /**
   * HTML Button type.
   */
  type: HTMLButtonElement["type"];
  /**
   * Visual variant of the button.
   */
  variant?: ButtonVariant;
} & HTMLAttributes<HTMLButtonElement>;
