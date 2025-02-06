import { Root } from "./styles";
import { UnorderedListProps } from "./UnorderedList.types";
import { CSSProperties } from "react";

/**
 * HTML unordered list.
 */
export function UnorderedList({
  align = "left",
  children,
  style,
  ...rest
}: UnorderedListProps) {
  return (
    <Root
      data-testid={UnorderedList.name}
      style={{ "--align": align, ...style } as CSSProperties}
      {...rest}
    >
      {children}
    </Root>
  );
}
