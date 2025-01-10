"use client";
import { WeatherStation } from "@/entities/organisms/WeatherStation";
import { Root } from "./styles";
import {
  AllWeatherData,
  IndoorData,
  OutdoorData,
  RainData,
  WeatherStationData,
  WindData,
} from "../../types";
import { useEffect, useState } from "react";

type WeatherWrapperProps = {};

/**
 * TypeGuard to verify successful Netatmo response.
 * @param response
 */
function isWeatherStationData(
  response: WeatherStationData | { error: string }
): response is WeatherStationData {
  return (response as WeatherStationData).dashboard_data !== undefined;
}

const getData = async () => {
  const weatherFetch = await fetch("/api/weather/data");
  if (weatherFetch.ok) {
    const jsonOutput: AllWeatherData = await weatherFetch.json();
    const allData = jsonOutput.data.body.devices;
    console.log({ allData });
    const station = allData[0];
    console.log({ station });
    return station;
  } else {
    return { error: "could not get data" };
  }
};

export function WeatherWrapper({ ...rest }: WeatherWrapperProps) {
  const [currentIndoorData, setCurrentIndoorData] = useState<
    IndoorData | undefined
  >(undefined);
  const [currentOutdoorData, setCurrentOutdoorData] = useState<
    OutdoorData | undefined
  >(undefined);
  const [currentRainData, setCurrentRainData] = useState<RainData | undefined>(
    undefined
  );
  const [currentWindData, setCurrentWindData] = useState<WindData | undefined>(
    undefined
  );
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    const updateUi = async () => {
      setIsPending(true);
      const station = await getData();

      if (!isWeatherStationData(station)) {
        return;
      }

      setCurrentIndoorData(station.dashboard_data);

      setCurrentOutdoorData(
        station.modules.filter((obj) => {
          return obj.module_name === "Outdoor Weather Station";
        })[0].dashboard_data as OutdoorData
      );

      setCurrentRainData(
        station.modules.filter((obj) => {
          return obj.module_name === "Rain Gauge";
        })[0].dashboard_data as RainData
      );

      setCurrentWindData(
        station.modules.filter((obj) => {
          return obj.module_name === "Anemometer";
        })[0].dashboard_data as WindData
      );
      setIsPending(false);
    };
    const weatherCallInterval = setInterval(async () => {
      await updateUi();
    }, 10000);

    return () => clearInterval(weatherCallInterval);
  }, [
    currentIndoorData,
    currentOutdoorData,
    currentRainData,
    currentWindData,
    isPending,
  ]);

  return (
    <Root data-testid={WeatherWrapper.name} {...rest}>
      <WeatherStation
        rain={currentRainData ? currentRainData.Rain : undefined}
        windStrength={
          currentWindData ? currentWindData.WindStrength : undefined
        }
        windAngle={currentWindData ? currentWindData.WindAngle : undefined}
        temperature={
          currentOutdoorData ? currentOutdoorData.Temperature : undefined
        }
        pressure={currentIndoorData ? currentIndoorData.Pressure : undefined}
        isPending={isPending}
      />
    </Root>
  );
}
