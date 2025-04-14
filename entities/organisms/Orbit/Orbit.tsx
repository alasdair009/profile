import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { colors } from "@/entities";
import { lcgNextRand, makeLCG } from "@/lib/random";
import styles from "./Orbit.module.scss";

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
      <span
        className={styles.particle}
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
    <div className={styles.root} data-testid={Orbit.name} {...rest}>
      <div className={styles.stage}>
        <div className={styles.core}>{particles}</div>
      </div>
    </div>
  );
}
