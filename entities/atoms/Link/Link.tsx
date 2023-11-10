import { Root } from "./styles";
import type { LinkProps } from "./types";

/**
 * Link to a new path or url
 */
export function Link({ variant = "regular", children, ...rest }: LinkProps) {
  return (
    <Root $variant={variant} {...rest}>
      {children}
    </Root>
  );
}
