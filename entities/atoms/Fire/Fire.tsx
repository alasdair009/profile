import { CSSProperties, HTMLAttributes } from "react";
import { sizes } from "@/styles/tokens";
import { lcgNextRand, makeLCG } from "@/lib/random";
import styles from "./Fire.module.css";
import { toRem } from "@/styles/style-helpers";

type HeadingProps = {
  /**
   * Base color of the particles.
   */
  baseColor?: CSSProperties["color"];
  /**
   * How many particles to render.
   */
  numberOfParticles?: number;
  /**
   * Diameter of each particle.
   */
  particleSize?: number;
  /**
   * Time in seconds for the particles to complete their journey.
   */
  duration?: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * CSS Rendered Fire animation that can have the colour, size and intensity customised.
 */
export function Fire({
  baseColor = "#ff5000",
  particleSize = sizes.s80,
  numberOfParticles = 50,
  duration = 1,
  style,
  className,
  ...rest
}: HeadingProps) {
  const fireLCG = makeLCG();
  const embers = [];
  for (let i = 0; i < numberOfParticles; i++) {
    embers.push(
      <span
        className={styles.ember}
        key={`ember${baseColor}${particleSize}${numberOfParticles}${duration}${i}`}
        data-testid={`${Fire.name}Ember`}
        style={
          {
            "--animationDelay": lcgNextRand(fireLCG),
            "--index": i,
          } as CSSProperties
        }
      />
    );
  }

  return (
    <div
      className={`${styles.root} ${className}`}
      data-testid={Fire.name}
      style={
        {
          "--baseColor": baseColor,
          "--duration": duration,
          "--numberOfParticles": numberOfParticles,
          "--particleSize": toRem(particleSize),
          ...style,
        } as CSSProperties
      }
      {...rest}
    >
      {embers}
    </div>
  );
}
