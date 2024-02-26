import { ProgressElement, Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";

type ScoreCounterProps = {
  /**
   * Current progress value
   */
  value?: number;
  /**
   * Max value
   */
  max?: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Disc to display progress to a target value
 */
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
