import { Root } from "./styles";
import { HTMLAttributes } from "react";

type HeaderProps = {} & HTMLAttributes<HTMLDivElement>;
export function Container({ children, ...rest }: HeaderProps) {
  return (
    <Root data-testid={Container.name} {...rest}>
      {children}
    </Root>
  );
}
