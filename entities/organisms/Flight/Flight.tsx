import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { Cloud, colors, Sun } from "@/entities";
import { lcgNextRand, makeLCG } from "@/lib/random";
import styles from "./Flight.module.css";

type FlightProps = {
  /**
   * Colour of the sky.
   */
  skyColor?: CSSProperties["backgroundColor"];
  /**
   * Number of clouds to render.
   */
  numberOfClouds?: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Animation of a flight over clouds.
 */
export function Flight({
  skyColor = "#7fb4c7",
  numberOfClouds = 30,
  className,
  style,
  ...rest
}: FlightProps) {
  const flightLCG = makeLCG();
  const clouds: ReactNode[] = [];
  for (let i = 0; i < numberOfClouds; i++) {
    const x = (100 / numberOfClouds) * i;
    clouds.push(
      <Cloud
        className={styles.cloud}
        key={`cloud${i}`}
        data-testid={`${Flight.name}Cloud`}
        cloudColor={colors.whiteGhost}
        skyColor="transparent"
        dispersion={lcgNextRand(flightLCG) * (80 - 40) + 40}
        scale={lcgNextRand(flightLCG) * (200 - 180) + 180}
        style={
          {
            "--moveTo": `${x - 100}%`,
            animationDelay: `-${lcgNextRand(flightLCG) * 6}s`,
            filter: `brightness(${lcgNextRand(flightLCG) * (1 - 0.87) + 0.87})`,
            left: `${x}%`,
          } as CSSProperties
        }
      />
    );
  }

  return (
    <div
      className={`${styles.root} ${className}`}
      data-testid={Flight.name}
      style={{ ...style, "--sky-color": skyColor } as CSSProperties}
      {...rest}
    >
      <Sun className={styles.sun} />
      {clouds}
    </div>
  );
}
