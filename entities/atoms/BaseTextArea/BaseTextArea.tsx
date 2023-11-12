import { Root } from "./styles";
import { HTMLAttributes } from "react";

type BaseTextAreaProps = {} & HTMLAttributes<HTMLTextAreaElement>;

/**
 * Base input type
 */
export function BaseTextArea({ ...rest }: BaseTextAreaProps) {
  return <Root {...rest} />;
}
