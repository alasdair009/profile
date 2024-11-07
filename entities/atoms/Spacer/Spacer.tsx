import { Root } from "./styles";
import { HTMLAttributes } from "react";

type SpacerProps = {
  /**
   * Multiply up the vertical space the entity provides.
   */
  multiplier?: number;
} & HTMLAttributes<HTMLBRElement>;

/**
 * Break to increase vertical space.
 */
export function Spacer({ multiplier = 1, ...rest }: SpacerProps) {
  return <Root $multiplier={multiplier} data-testid={Spacer.name} {...rest} />;
}
