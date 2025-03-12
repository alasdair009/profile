import { Root } from "./styles";
import { CSSProperties, HTMLAttributes } from "react";

type MoonProps = {} & HTMLAttributes<HTMLDivElement>;

/**
 * Animation of a flight over clouds.
 */
export function Moon({ ...rest }: MoonProps) {
  return <Root data-testid={Moon.name} {...rest} />;
}
