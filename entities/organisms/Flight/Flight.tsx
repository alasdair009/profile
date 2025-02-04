import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { Root, Cloud } from "./styles";
import { colors } from "@/entities";
import { lcgNextRand, makeLCG } from "@/lib/random";

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
  ...rest
}: FlightProps) {
  const flightLCG = makeLCG();
  const clouds: ReactNode[] = [];
  for (let i = 0; i < numberOfClouds; i++) {
    const x = (100 / numberOfClouds) * i;
    clouds.push(
      <Cloud
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
    <Root data-testid={Flight.name} $skyColor={skyColor} {...rest}>
      {clouds}
    </Root>
  );
}
