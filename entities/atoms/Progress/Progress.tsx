import { ProgressElement, Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";

export type ProgressProps = {
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
export function Progress({ max = 100, value = 100, ...rest }: ProgressProps) {
  const safeValue = value > max ? max : value;
  return (
    <Root data-testid={Progress.name} {...rest}>
      <ProgressElement max={100} value={safeValue} data-testid={`${Progress.name}Element`} />
    </Root>
  );
}
