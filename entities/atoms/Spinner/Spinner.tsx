import { Root, SpinnerImage } from "./styles";
import { HTMLAttributes, ReactNode } from "react";
import pikeSvg from "./pike.svg";
import { Heading } from "@/entities";

export function Spinner({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <Root {...rest}>
      <SpinnerImage src={pikeSvg} alt="A gymnast in a pike shape" />
    </Root>
  );
}
