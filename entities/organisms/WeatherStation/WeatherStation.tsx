import { ComponentProps, CSSProperties, HTMLAttributes } from "react";
import { Frame, House, HouseTree, Inner, Root, Sun, SunAnchor } from "./styles";
import { colors, Tree } from "@/entities";
import talihouse from "./house.svg";
import { StaticImageData } from "next/image";
import { Rain } from "@/entities/organisms/Lightning/Rain";
import { Thermometer } from "./Thermometer/Thermometer";
import { Barometer } from "./Barometer";
import { Plaque } from "./Plaque";
import type { SunState } from "@/app/portfolio/weather/types";

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
  sunState?: SunState;
  nextRising?: Date;
  nextNoon?: Date;
  nextSetting?: Date;
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
  sunState?: SunState
): Exclude<CSSProperties["backgroundColor"], undefined> => {
  if (typeof sunState === "undefined") {
    return "#7fb4c7";
  }

  if (sunState === "below_horizon") {
    return colors.blackEvil;
  }

  return "#7fb4c7";
};

/**
 * Calculates the amount to transform the sun by to reflect its position in the sky.
 * @param nextRiseHour - the hour the sun next rises
 * @param nextSettingHour - the hour the sun next sets
 */
const getSunTransform = (nextRiseHour: number, nextSettingHour: number) => {
  const nowHour = new Date().getHours();
  const progressIntoDaylight = nowHour - nextRiseHour;
  const dayLightHours = nextSettingHour - nextRiseHour;
  const anglePerDaylightHour = 180 / dayLightHours;
  return progressIntoDaylight * anglePerDaylightHour;
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
  sunState,
  nextRising,
  nextNoon,
  nextSetting,
  ...rest
}: WeatherStationProps) {
  let treeDirection: ComponentProps<typeof Tree>["windDirection"] = "none";
  if (windAngle && ["ne", "e", "se"].includes(windAngle)) {
    treeDirection = "right";
  } else if (windAngle && ["sw", "w", "nw"].includes(windAngle)) {
    treeDirection = "left";
  }
  const showRain = typeof rain !== "undefined" && rain > 0;
  const showSun = nextRising && nextSetting;

  const risingHour =
    typeof nextRising === "object"
      ? nextRising.getHours()
      : new Date(nextRising as unknown as number).getHours();
  const settingHour =
    typeof nextSetting === "object"
      ? nextSetting.getHours()
      : new Date(nextSetting as unknown as number).getHours();

  return (
    <Root data-testid={WeatherStation.name} {...rest}>
      <Inner>
        <Frame
          style={{ "--background": getSkyColor(sunState) } as CSSProperties}
        >
          {showRain && <Rain rainDrops={20} />}
          {showSun && (
            <SunAnchor
              style={
                {
                  "--rotation": getSunTransform(risingHour, settingHour),
                } as CSSProperties
              }
            >
              <Sun />
            </SunAnchor>
          )}
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
