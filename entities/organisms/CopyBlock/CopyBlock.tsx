import { HTMLAttributes, ReactNode } from "react";
import { Root } from "./styles";

type CopyBlockProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function CopyBlock({ children, ...rest }: CopyBlockProps) {
  return <Root {...rest}>{children}</Root>;
}
