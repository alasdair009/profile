import { Root, SpinnerImage } from "./styles";
import { HTMLAttributes } from "react";
import pikeSvg from "./pike.svg";

type SpinnerProps = {} & HTMLAttributes<HTMLDivElement>;

export function Spinner({ ...rest }: SpinnerProps) {
  return (
    <Root {...rest}>
      <SpinnerImage src={pikeSvg} alt="A gymnast in a pike shape" />
    </Root>
  );
}
