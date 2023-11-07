import { Root } from "./styles";
import { HTMLAttributes } from "react";

type HeaderProps = {} & HTMLAttributes<HTMLDivElement>;
export function Container({ children, ...rest }: HeaderProps) {
  return <Root {...rest}>{children}</Root>;
}
