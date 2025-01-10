export type IndoorData = {
  time_utc: number;
  Temperature: number;
  CO2: number;
  Humidity: number;
  Noise: number;
  Pressure: number;
  AbsolutePressure: number;
  min_temp: number;
  max_temp: number;
  date_max_temp: number;
  date_min_temp: number;
  temp_trend: "stable";
  pressure_trend: "stable";
};

export type OutdoorData = {
  Temperature: number;
};

export type RainData = {
  Rain: number;
};

export type WindData = {
  WindAngle?: number;
  WindStrength?: number;
};

export type WeatherStationData = {
  dashboard_data: IndoorData;
  modules: {
    module_name: "Outdoor Weather Station" | "Rain Gauge" | "Anemometer";
    dashboard_data: OutdoorData | RainData | WindData;
  }[];
};

export type AllWeatherData = {
  data: {
    body: {
      devices: WeatherStationData[];
    };
  };
};
