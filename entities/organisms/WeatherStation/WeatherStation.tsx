import { ComponentProps, CSSProperties, HTMLAttributes } from "react";
import { Frame, House, HouseTree, Inner, Root } from "./styles";
import { colors, Spinner, Tree, UnorderedList } from "@/entities";
import talihouse from "./house.svg";
import { StaticImageData } from "next/image";
import { Rain } from "@/entities/organisms/Lightning/Rain";
import { Thermometer } from "./Thermometer/Thermometer";
import { Barometer } from "./Barometer";
import { Plaque } from "./Plaque";

export const windDirections = [
  "n",
  "ne",
  "e",
  "se",
  "s",
  "sw",
  "w",
  "nw",
] as const;
export type WindDirection = (typeof windDirections)[number];

type WeatherStationProps = {
  rain?: number;
  windStrength?: number;
  windAngle?: WindDirection;
  temperature?: number;
  pressure?: number;
  sunAngle?: number;
  isPending?: boolean;
  lastUpdated?: Date;
} & HTMLAttributes<HTMLDivElement>;

const treePositions = [
  { r: 10, t: 35 },
  { r: 13, t: 40 },
  { r: 4, t: 45 },
  { r: 14, t: 50 },
  { r: 8, t: 55 },
  { r: 5, t: 60 },
  { r: 15, t: 65 },
  { r: 10, t: 70 },
  { r: 3, t: 75 },
];

const getSkyColor = (
  angle: number | undefined
): Exclude<CSSProperties["backgroundColor"], undefined> => {
  if (typeof angle === "undefined") {
    return "#7fb4c7";
  }

  if (angle < 0) {
    return colors.blackEvil;
  }

  return "#7fb4c7";
};

export function WeatherStation({
  rain,
  windStrength,
  windAngle,
  temperature,
  pressure,
  sunAngle,
  lastUpdated,
  isPending = false,
  ...rest
}: WeatherStationProps) {
  let treeDirection: ComponentProps<typeof Tree>["windDirection"] = "none";
  if (windAngle && ["ne", "e", "se"].includes(windAngle)) {
    treeDirection = "right";
  } else if (windAngle && ["sw", "w", "nw"].includes(windAngle)) {
    treeDirection = "left";
  }
  const showRain = typeof rain !== "undefined" && rain > 0;
  return (
    <Root data-testid={WeatherStation.name} {...rest}>
      <Inner>
        <Frame
          style={{ "--background": getSkyColor(sunAngle) } as CSSProperties}
        >
          {showRain && <Rain rainDrops={20} />}
          <House
            src={talihouse as StaticImageData}
            alt="Talihouse"
            width={1000}
            height={1000}
          />
          {treePositions.map((position) => (
            <HouseTree
              key={JSON.stringify(position)}
              windDirection={treeDirection}
              style={
                {
                  "--right": `${position.r}%`,
                  "--top": `${position.t}%`,
                } as CSSProperties
              }
            />
          ))}
          {typeof temperature !== "undefined" && (
            <Thermometer temperature={temperature} />
          )}
          {typeof pressure !== "undefined" && <Barometer pressure={pressure} />}
        </Frame>
        <Plaque
          windAngle={windAngle}
          windStrength={windStrength}
          rain={rain}
          pressure={pressure}
          sunAngle={sunAngle}
          lastUpdated={lastUpdated}
          isPending={isPending}
        />
      </Inner>
    </Root>
  );
}

WeatherStation.Barometer = Barometer;
WeatherStation.Thermometer = Thermometer;
