import { Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";
import { colors } from "@/entities";

type CodeProps = HTMLAttributes<HTMLSpanElement>;

/**
 * Render source code in a monospaced box.
 */
export function Code({ children, ...rest }: CodeProps) {
  return (
    <Root color={colors.redHeat} data-testid={Code.name} {...rest}>
      {children}
    </Root>
  );
}
