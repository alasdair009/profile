"use client";
import { Root } from "./styles";
import { HTMLAttributes } from "react";

type BaseLabelProps = {
  as?: "label" | "span";
} & HTMLAttributes<HTMLLabelElement>;

/**
 * Base input type
 */
export function BaseLabel({ children, as = "label", ...rest }: BaseLabelProps) {
  return (
    <Root as={as} data-testid={BaseLabel.name} {...rest}>
      {children}
    </Root>
  );
}
