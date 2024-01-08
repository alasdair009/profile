import { Root } from "./styles";
import { UnorderedListProps } from "@/entities/atoms/UnorderedList/UnorderedList.types";

export function UnorderedList({
  align = "left",
  children,
  ...rest
}: UnorderedListProps) {
  return (
    <Root $align={align} {...rest}>
      {children}
    </Root>
  );
}
