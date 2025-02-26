import { WeatherData } from "@/app/portfolio/weather/types";

type EntityData = {
  entity_id:
    | "sensor.weather_station_atmospheric_pressure"
    | "sensor.weather_station_outdoor_weather_station_humidity"
    | "sensor.weather_station_outdoor_weather_station_temperature"
    | "sensor.weather_station_rain_gauge_precipitation"
    | "sensor.weather_station_anemometer_wind_direction"
    | "sensor.weather_station_anemometer_wind_speed";
  state: string;
  last_updated: string;
  attributes: Record<string, unknown>;
};

const windDirections = ["n", "ne", "e", "se", "s", "sw", "w", "nw"] as const;
type WindDirection = (typeof windDirections)[number];

function isWindDirection(
  maybeDirection: unknown
): maybeDirection is WindDirection {
  return (
    typeof maybeDirection === "string" &&
    // @ts-ignore
    windDirections.includes(maybeDirection)
  );
}

export async function GET() {
  const res = await fetch(`${process.env.HOME_ASSISTANT_URL}/api/states`, {
    headers: {
      Authorization: `Bearer ${process.env.HOME_ASSISTANT_TOKEN}`,
    },
  });
  if (!res.ok) {
    return Response.json({
      error: `API error (${res.status}) - ${res.statusText}`,
    });
  }
  const data: EntityData[] = await res.json();

  const weatherData = data.filter((obj) => {
    return obj.entity_id.includes("weather_station");
  });

  const pressureData = weatherData.filter((obj) => {
    return obj.entity_id === "sensor.weather_station_atmospheric_pressure";
  })[0];

  const temperatureData = weatherData.filter((obj) => {
    return (
      obj.entity_id ===
      "sensor.weather_station_outdoor_weather_station_temperature"
    );
  })[0];

  const humidityData = weatherData.filter((obj) => {
    return (
      obj.entity_id ===
      "sensor.weather_station_outdoor_weather_station_humidity"
    );
  })[0];

  const rainData = weatherData.filter((obj) => {
    return obj.entity_id === "sensor.weather_station_rain_gauge_precipitation";
  })[0];

  const windDirectionData = weatherData.filter((obj) => {
    return obj.entity_id === "sensor.weather_station_anemometer_wind_direction";
  })[0];

  const windSpeedData = weatherData.filter((obj) => {
    return obj.entity_id === "sensor.weather_station_anemometer_wind_speed";
  })[0];

  const responseData: WeatherData = {
    pressure: {
      value: parseFloat(pressureData.state),
      unit: `${pressureData.attributes.unit_of_measurement}`,
      lastUpdated: `${pressureData.last_updated}`,
    },
    temperature: {
      value: parseFloat(temperatureData.state),
      unit: `${temperatureData.attributes.unit_of_measurement}`,
      lastUpdated: `${temperatureData.last_updated}`,
    },
    humidity: {
      value: parseFloat(humidityData.state),
      unit: `${humidityData.attributes.unit_of_measurement}`,
      lastUpdated: `${humidityData.last_updated}`,
    },
    rain: {
      value: parseFloat(rainData.state),
      unit: `${rainData.attributes.unit_of_measurement}`,
      lastUpdated: `${rainData.last_updated}`,
    },
    wind: {
      direction: isWindDirection(windDirectionData.state)
        ? windDirectionData.state
        : "",
      value: parseFloat(windSpeedData.state),
      unit: `${windSpeedData.attributes.unit_of_measurement}`,
      lastUpdated: `${windSpeedData.last_updated}`,
    },
  };

  return Response.json(responseData);
}
