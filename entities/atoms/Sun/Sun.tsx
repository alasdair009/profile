import { Root } from "./styles";
import { CSSProperties, HTMLAttributes } from "react";

type SunProps = {
  /**
   * To render a lense flare on the screen.
   */
  lenseFlare?: boolean;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Animation of a flight over clouds.
 */
export function Sun({ lenseFlare = false, ...rest }: SunProps) {
  return <Root data-testid={Sun.name} {...rest} />;
}
