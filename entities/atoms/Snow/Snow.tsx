import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { lcgNextRand, makeLCG } from "@/lib/random";
import { rem } from "polished";
import styles from "./Snow.module.scss";

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
  duration = 4,
  style,
  ...rest
}: SnowProps) {
  const flakes: ReactNode[] = [];
  const flakeLCG = makeLCG();
  for (let i = 0; i < numberOfFlakes; i++) {
    flakes.push(
      <span
        className={styles.flake}
        key={`flake${i}`}
        data-testid={`${Snow.name}Flake`}
        style={
          {
            "--index": i,
            "--delay": lcgNextRand(flakeLCG),
            "--flakeDuration":
              lcgNextRand(flakeLCG) * (duration / 2) + duration * 0.8,
          } as CSSProperties
        }
      />
    );
  }

  return (
    <div
      className={styles.root}
      data-testid={Snow.name}
      style={
        {
          "--numberOfFlakes": numberOfFlakes,
          "--size": rem(size),
          "--duration": duration,
          ...style,
        } as CSSProperties
      }
      {...rest}
    >
      {flakes}
    </div>
  );
}
