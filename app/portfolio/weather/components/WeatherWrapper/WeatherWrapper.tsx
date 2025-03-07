"use client";
import { WeatherStation } from "@/entities/organisms/WeatherStation";
import { Root } from "./styles";
import { WeatherData } from "../../types";
import { useEffect, useState } from "react";

type WeatherWrapperProps = {};

/**
 * TypeGuard to verify successful Netatmo response.
 * @param response
 */
function isWeatherData(
  response: WeatherData | { error: string }
): response is WeatherData {
  return (response as WeatherData).temperature !== undefined;
}

const getData = async () => {
  const weatherFetch = await fetch("/api/weather");
  if (weatherFetch.ok) {
    const jsonOutput: WeatherData = await weatherFetch.json();
    return jsonOutput;
  } else {
    return { error: "could not get data" };
  }
};

export function WeatherWrapper({ ...rest }: WeatherWrapperProps) {
  const [currentData, setCurrentData] = useState<WeatherData | undefined>(
    undefined
  );
  const [isPending, setIsPending] = useState(true);

  const updateUi = async () => {
    setIsPending(true);
    const weatherResponseData = await getData();

    if (!isWeatherData(weatherResponseData)) {
      console.warn(weatherResponseData);
      return;
    }

    setCurrentData(weatherResponseData);

    setIsPending(false);
  };

  useEffect(() => {
    const weatherCallInterval = setInterval(async () => {
      await updateUi();
    }, 10000);

    return () => clearInterval(weatherCallInterval);
  }, [currentData, isPending]);

  useEffect(() => {
    updateUi();
  }, []);

  return (
    <Root data-testid={WeatherWrapper.name} {...rest}>
      <WeatherStation
        rain={currentData ? currentData.rain.value : undefined}
        windStrength={currentData ? currentData.wind.value : undefined}
        windAngle={currentData ? currentData.wind.direction : undefined}
        temperature={currentData ? currentData.temperature.value : undefined}
        pressure={currentData ? currentData.pressure.value : undefined}
        sunAngle={currentData ? currentData.sun.value : undefined}
        sunState={currentData ? currentData.sun.state : undefined}
        nextRising={
          currentData ? new Date(currentData.sun.nextRising) : undefined
        }
        nextNoon={currentData ? new Date(currentData.sun.nextNoon) : undefined}
        nextSetting={
          currentData ? new Date(currentData.sun.nextSetting) : undefined
        }
        lastUpdated={
          currentData
            ? new Date(currentData?.temperature.lastUpdated)
            : undefined
        }
        isPending={isPending}
      />
    </Root>
  );
}
