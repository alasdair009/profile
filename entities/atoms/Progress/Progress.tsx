import { ProgressElement, Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";

type ScoreCounterProps = {
  value?: number;
  max?: number;
} & HTMLAttributes<HTMLDivElement>;

export function Progress({
  max = 100,
  value = 100,
  ...rest
}: ScoreCounterProps) {
  const safeValue = value > max ? max : value;
  return (
    <Root {...rest}>
      <ProgressElement max={100} value={safeValue} />
    </Root>
  );
}
