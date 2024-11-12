import { HTMLAttributes } from "react";
import { Root, Flake } from "./styles";

type SnowProps = {
  /**
   * Number of flakes in the animation.
   */
  numberOfFlakes?: number;
  /**
   * Size of the flakes in the animation.
   */
  size?: number;
  /**
   * Maximum time for flakes to fall.
   */
  duration?: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Renders snowflakes falling down a container.
 */
export function Snow({
  numberOfFlakes = 50,
  size = 16,
  duration = 3,
  ...rest
}: SnowProps) {
  const flakes = [];
  for (let i = 0; i < numberOfFlakes; i++) {
    flakes.push(<Flake key={`flake${i}`} data-testid={`${Snow.name}Flake`} />);
  }

  return (
    <Root
      data-testid={Snow.name}
      $numberOfFlakes={numberOfFlakes}
      $size={size}
      $duration={duration}
      {...rest}
    >
      {flakes}
    </Root>
  );
}
