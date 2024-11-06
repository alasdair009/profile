import { Core, Particle, Root, Stage } from "./styles";
import { CSSProperties, HTMLAttributes } from "react";
import { colors } from "@/entities";

type OrbitProps = {
  /**
   * Number of particles in the animation.
   */
  numberOfParticles?: number;
  /**
   * Colour of the particles.
   */
  particleColour?: CSSProperties["backgroundColor"];
  /**
   * Show text inside the particles.
   */
  showText?: boolean;
} & HTMLAttributes<HTMLDivElement>;

/**
 * A white circle with orbiting particles.
 */
export function Orbit({ numberOfParticles = 5, particleColour = colors.greenGrass, showText = false, ...rest }: OrbitProps) {
  const particles = [];
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(<Particle key={`particle${numberOfParticles}${i}`} data-testid={`${Orbit.name}Particle`} $color={particleColour} $position={i} $content={showText ? "AM" : undefined} />);
  }
  return (
    <Root data-testid={Orbit.name} {...rest}>
      <Stage>
        <Core>{particles}</Core>
      </Stage>
    </Root>
  );
}
