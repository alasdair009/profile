export type WeatherEntityData = {
  entity_id:
    | "sensor.weather_station_atmospheric_pressure"
    | "sensor.weather_station_outdoor_weather_station_humidity"
    | "sensor.weather_station_outdoor_weather_station_temperature"
    | "sensor.weather_station_rain_gauge_precipitation"
    | "sensor.weather_station_anemometer_wind_direction"
    | "sensor.weather_station_anemometer_wind_speed"
    | "sensor.sun_solar_elevation";
  state: string;
  last_updated: string;
  attributes: Record<string, unknown>;
};

export type WeatherData = {
  pressure: {
    value: number;
    unit: string;
    lastUpdated: string;
  };
  temperature: {
    value: number;
    unit: string;
    lastUpdated: string;
  };
  humidity: {
    value: number;
    unit: string;
    lastUpdated: string;
  };
  rain: {
    value: number;
    unit: string;
    lastUpdated: string;
  };
  wind: {
    direction: WindDirection | "";
    value: number;
    unit: string;
    lastUpdated: string;
  };
  sun: {
    value: number;
    unit: string;
    lastUpdated: string;
  };
};
