import { Core, Particle, Root, Stage } from "./styles";
import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { colors } from "@/entities";
import { lcgNextRand, makeLCG } from "@/lib/random";

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
export function Orbit({
  numberOfParticles = 5,
  particleColour = colors.greenGrass,
  showText = false,
  ...rest
}: OrbitProps) {
  const particles: ReactNode[] = [];
  const orbitLCG = makeLCG();
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(
      <Particle
        key={`particle${numberOfParticles}${i}`}
        data-testid={`${Orbit.name}Particle`}
        style={
          {
            "--color": particleColour,
            "--content": showText ? "'AM'" : "''",
            "--position": i,
            "--time": `${1.5 - (lcgNextRand(orbitLCG) * 30 - 30) / 10}s`,
          } as CSSProperties
        }
      />
    );
  }
  return (
    <Root data-testid={Orbit.name} {...rest}>
      <Stage>
        <Core>{particles}</Core>
      </Stage>
    </Root>
  );
}
