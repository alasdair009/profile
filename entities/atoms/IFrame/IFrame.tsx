import { Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";

type IFrameProps = {
  src: string;
} & HTMLAttributes<HTMLIFrameElement>;
export function IFrame({ ...rest }: IFrameProps) {
  return <Root {...rest} allowFullScreen={true} />;
}
