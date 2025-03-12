import {
  CloudState,
  SunState,
  WeatherData,
  WeatherEntityData,
} from "@/app/portfolio/weather/types";
import {
  WindDirection,
  windDirections,
} from "@/entities/organisms/WeatherStation/WeatherStation";

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
  const data: WeatherEntityData[] = await res.json();

  const weatherData = data.filter((obj) => {
    return (
      obj.entity_id.includes("weather_station") ||
      obj.entity_id === "sun.sun" ||
      obj.entity_id === "weather.forecast_home"
    );
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

  const sunData = weatherData.filter((obj) => {
    return obj.entity_id === "sun.sun";
  })[0];

  const cloudData = weatherData.filter((obj) => {
    return obj.entity_id === "weather.forecast_home";
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
    sun: {
      value: parseFloat(sunData.attributes.elevation as string),
      azimuth: parseFloat(sunData.attributes.azimuth as string),
      rising: sunData.attributes.rising as boolean,
      state: sunData.state as SunState,
      nextDawn: sunData.attributes.next_dawn as string,
      nextDusk: sunData.attributes.next_dusk as string,
      nextMidnight: sunData.attributes.next_midnight as string,
      nextNoon: sunData.attributes.next_noon as string,
      nextRising: sunData.attributes.next_rising as string,
      nextSetting: sunData.attributes.next_setting as string,
      unit: `°`,
      lastUpdated: `${sunData.last_updated}`,
    },
    cloud: {
      value: parseInt(cloudData.attributes.cloud_coverage as string),
      state: cloudData.state as CloudState,
    },
  };

  return Response.json(responseData);
}
