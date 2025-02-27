import { ComponentProps, CSSProperties, HTMLAttributes } from "react";
import { Frame, House, HouseTree, Inner, Root } from "./styles";
import { Spinner, Tree, UnorderedList } from "@/entities";
import talihouse from "./house.svg";
import { StaticImageData } from "next/image";
import { WindDirection } from "@/app/api/weather/route";
import { Rain } from "@/entities/organisms/Lightning/Rain";
import { Thermometer } from "./Thermometer/Thermometer";
import { Barometer } from "@/entities/organisms/WeatherStation/Barometer";

type WeatherStationProps = {
  rain?: number;
  windStrength?: number;
  windAngle?: WindDirection;
  temperature?: number;
  pressure?: number;
  isPending?: boolean;
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

export function WeatherStation({
  rain = 0,
  windStrength,
  windAngle,
  temperature,
  pressure,
  isPending = false,
  ...rest
}: WeatherStationProps) {
  let treeDirection: ComponentProps<typeof Tree>["windDirection"] = "none";
  if (windAngle && ["ne", "e", "se"].includes(windAngle)) {
    treeDirection = "right";
  } else if (windAngle && ["sw", "w", "nw"].includes(windAngle)) {
    treeDirection = "left";
  }
  return (
    <Root data-testid={WeatherStation.name} {...rest}>
      <Inner>
        <Frame>
          {rain > 0 && <Rain rainDrops={20} />}
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
        {isPending && (
          <span>
            Requesting new data...
            <Spinner style={{ display: "inline-block" }} />
          </span>
        )}
        <UnorderedList>
          <li>rain: {rain}mm</li>
          <li>windStrength: {windStrength}kph</li>
          <li>windAngle: {windAngle}</li>
          <li>temperature: {temperature}&deg;C</li>
          <li>pressure: {temperature}mbar</li>
        </UnorderedList>
      </Inner>
    </Root>
  );
}

WeatherStation.Barometer = Barometer;
WeatherStation.Thermometer = Thermometer;
