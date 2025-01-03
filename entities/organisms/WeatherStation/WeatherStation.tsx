import { HTMLAttributes } from "react";
import { Frame, House, Inner, Root } from "./styles";
import { UnorderedList } from "@/entities";
import talihouse from "./house.svg";
import { StaticImageData } from "next/image";

type WeatherStationProps = {
  rain?: number;
  windStrength?: number;
  windAngle?: number;
  temperature?: number;
} & HTMLAttributes<HTMLDivElement>;

const directions = [
  "North",
  "North-East",
  "East",
  "South-East",
  "South",
  "South-West",
  "West",
  "North-West",
];

const getDirection = (angle?: number) => {
  if (typeof angle === "undefined") {
    return "";
  }
  const index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
  return directions[index];
};

export function WeatherStation({
  rain,
  windStrength,
  windAngle,
  temperature,
  ...rest
}: WeatherStationProps) {
  return (
    <Root data-testid={WeatherStation.name} {...rest}>
      <Inner>
        <Frame>
          <House
            src={talihouse as StaticImageData}
            alt="Talihouse"
            width={1000}
            height={1000}
          />
        </Frame>
        <UnorderedList>
          <li>rain: {rain}mm</li>
          <li>windStrength: {windStrength}kph</li>
          <li>windAngle: {getDirection(windAngle)}</li>
          <li>temperature: {temperature}&deg;C</li>
        </UnorderedList>
      </Inner>
    </Root>
  );
}
