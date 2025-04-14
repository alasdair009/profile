import { ComponentProps, CSSProperties, HTMLAttributes } from "react";
import { Cloud, colors, Moon, Sun, Tree } from "@/entities";
import talihouse from "./house.svg";
import { StaticImageData } from "next/image";
import { Rain } from "../../atoms/Rain";
import { Thermometer } from "./Thermometer/Thermometer";
import { Barometer } from "./Barometer";
import { Plaque } from "./Plaque";
import type { SunState } from "@/app/portfolio/weather/types";
import styles from "./WeatherStation.module.scss";
import Image from "next/image";

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
  cloudCover?: number;
  now?: Date;
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
const getSunTransform = (
  nowHour: number,
  nextRiseHour: number,
  nextSettingHour: number
) => {
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
  cloudCover,
  now = new Date(),
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
  const cloudCoverPercentage =
    cloudCover && cloudCover >= 0 && cloudCover <= 100 ? cloudCover : 0;

  const nowHour =
    typeof now === "object" ? now.getHours() : new Date(`${now}`).getHours();
  const risingHour =
    typeof nextRising === "object"
      ? nextRising.getHours()
      : new Date(nextRising as unknown as number).getHours();
  const settingHour =
    typeof nextSetting === "object"
      ? nextSetting.getHours()
      : new Date(nextSetting as unknown as number).getHours();

  return (
    <section
      className={styles.root}
      data-testid={WeatherStation.name}
      {...rest}
    >
      <div className={styles.inner}>
        <div
          className={styles.frame}
          style={{ "--background": getSkyColor(sunState) } as CSSProperties}
        >
          {showRain && <Rain rainDrops={20} />}
          {showSun && (
            <span
              className={styles.sunAnchor}
              style={
                {
                  "--rotation": getSunTransform(
                    nowHour,
                    risingHour,
                    settingHour
                  ),
                } as CSSProperties
              }
            >
              <Moon className={styles.moon} />
              <Sun className={styles.sun} />
            </span>
          )}
          <div className={styles.cloudWrapper}>
            {cloudCoverPercentage > 0 && (
              <Cloud
                className={styles.cloud}
                cloudColor={colors.whiteGhost}
                dispersion={50}
                skyColor="transparent"
                style={{ "--xPos": "20%", "--yPos": "15%" } as CSSProperties}
              />
            )}
            {cloudCoverPercentage > 33 && (
              <Cloud
                className={styles.cloud}
                cloudColor={colors.whiteGhost}
                dispersion={50}
                skyColor="transparent"
                style={{ "--xPos": "80%", "--yPos": "10%" } as CSSProperties}
              />
            )}
            {cloudCoverPercentage > 66 && (
              <Cloud
                className={styles.cloud}
                cloudColor={colors.whiteGhost}
                dispersion={50}
                skyColor="transparent"
                style={{ "--xPos": "50%", "--yPos": "20%" } as CSSProperties}
              />
            )}
          </div>
          <Image
            className={styles.house}
            src={talihouse as StaticImageData}
            alt="Talihouse"
            width={1000}
            height={1000}
          />
          {treePositions.map((position) => (
            <Tree
              className={styles.houseTree}
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
        </div>
        <Plaque
          windAngle={windAngle}
          windStrength={windStrength}
          rain={rain}
          pressure={pressure}
          sunAngle={sunAngle}
          lastUpdated={lastUpdated}
          isPending={isPending}
          cloudCover={cloudCoverPercentage}
        />
      </div>
    </section>
  );
}

WeatherStation.Barometer = Barometer;
WeatherStation.Thermometer = Thermometer;
