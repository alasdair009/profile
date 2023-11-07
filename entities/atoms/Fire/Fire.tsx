<<<<<<< HEAD
import { Root } from "./styles";
import { CSSProperties, HTMLAttributes } from "react";
import { sizes } from "../../design-tokens/dimensions";
=======
import {Root, Ember} from "./styles";
import {CSSProperties, HTMLAttributes} from "react";
import {sizes} from "../../design-tokens/dimensions";
>>>>>>> 555e247e8d9dbc71ab18766334bc9fb5807fc753

type HeadingProps = {
  /**
   * Base color of the particles
   */
  baseColor?: CSSProperties["color"];
  /**
   * How many particles to render.
   */
  numberOfParticles?: number;
  /**
   * Diameter of each particle
   */
  particleSize?: number;
  /**
   * Time in seconds for the particles to complete their journey
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
  ...rest
}: HeadingProps) {
  const particles = [];
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(
      <span
        key={`particle${baseColor}${particleSize}${numberOfParticles}${duration}${i}`}
      ></span>
    );
  }

<<<<<<< HEAD
  return (
    <Root
      $baseColor={baseColor}
      $particleSize={particleSize}
      $numberOfParticles={numberOfParticles}
      $duration={duration}
      {...rest}
    >
      {particles}
=======
    const embers = [];
    for (let i = 0; i < numberOfParticles; i++) {
        embers.push(<Ember key={`ember${baseColor}${particleSize}${numberOfParticles}${duration}${i}`} />);
    }

    return <Root $baseColor={baseColor} $particleSize={particleSize} $numberOfParticles={numberOfParticles} $duration={duration} {...rest}>
        {embers}
>>>>>>> 555e247e8d9dbc71ab18766334bc9fb5807fc753
    </Root>
  );
}
