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
};
