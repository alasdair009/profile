import { Root, SpinnerImage } from "./styles";
import { HTMLAttributes } from "react";
import pikeSvg from "./pike.svg";

type SpinnerProps = HTMLAttributes<HTMLDivElement>;

/**
 * Rotating icon used to indicate something is loading or waiting.
 */
export function Spinner({ ...rest }: SpinnerProps) {
  return (
    <Root data-testid={Spinner.name} {...rest}>
      <SpinnerImage src={pikeSvg} alt="A gymnast in a pike shape" />
    </Root>
  );
}
