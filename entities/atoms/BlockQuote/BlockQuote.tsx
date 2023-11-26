import { Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";

export function BlockQuote({ ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return <Root {...rest} />;
}
