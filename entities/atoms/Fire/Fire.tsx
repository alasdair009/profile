import { Root, Ember } from "./styles";
import { CSSProperties, HTMLAttributes } from "react";
import { sizes } from "@/entities";
import { rem } from "polished";
import { lcgNextRand, makeLCG } from "@/lib/random";

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
  particleSize = sizes.s80.raw,
  numberOfParticles = 50,
  duration = 1,
  style,
  ...rest
}: HeadingProps) {
  const fireLCG = makeLCG();
  const embers = [];
  for (let i = 0; i < numberOfParticles; i++) {
    embers.push(
      <Ember
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
    <Root
      data-testid={Fire.name}
      style={
        {
          "--baseColor": baseColor,
          "--duration": duration,
          "--numberOfParticles": numberOfParticles,
          "--particleSize": rem(particleSize),
          ...style,
        } as CSSProperties
      }
      {...rest}
    >
      {embers}
    </Root>
  );
}
