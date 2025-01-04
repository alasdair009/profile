import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import {
  Container,
  ErrorText,
  Heading,
  HorizontalRule,
  Paragraph,
} from "@/entities";
import { WeatherStation } from "@/entities/organisms/WeatherStation";

export const metadata: Metadata = generateMetaData(
  "Weather",
  "A small app to load my weather station's live data",
  "portfolio/weather"
);

type WeatherStationData = {
  body: {
    devices: {
      dashboard_data: {
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
      modules: {
        module_name: string;
        dashboard_data: {
          Rain?: number;
          WindAngle?: number;
          WindStrength?: number;
          Temperature?: number;
        };
      }[];
    }[];
  };
};

export default async function WeatherPage() {
  const query = `https://api.netatmo.com/api/getstationsdata?get_favorites=false`;
  let station, indoorData, outdoorData, rainData, windData;
  const stationResponse = await fetch(query, {
    headers: {
      Authorization: `Bearer ${process.env.NETATMO_WEATHER_TOKEN}`,
    },
  });

  if (stationResponse.ok) {
    const data: WeatherStationData = await stationResponse.json();
    station = data.body.devices[0];

    indoorData = station.dashboard_data;

    outdoorData = station.modules.filter((obj) => {
      return obj.module_name === "Outdoor Weather Station";
    })[0].dashboard_data;

    rainData = station.modules.filter((obj) => {
      return obj.module_name === "Rain Gauge";
    })[0].dashboard_data;

    windData = station.modules.filter((obj) => {
      return obj.module_name === "Anemometer";
    })[0].dashboard_data;
  } else {
    console.error(
      `Could not get response from Netatmo using token: ${process.env.NETATMO_WEATHER_TOKEN}`
    );

    console.error(stationResponse.json());
  }

  return (
    <>
      <Heading>Weather</Heading>
      <Paragraph>
        This is a basic app used to read and display data collected from my own
        Netatmo Weather station. The app makes a request to the Netatmo UI via a
        bearing token to collect data from my device and updates the SVG below
        based on the data it receives.
      </Paragraph>
      {stationResponse.ok ? (
        <>
          <WeatherStation
            rain={rainData ? rainData.Rain : undefined}
            windStrength={windData ? windData.WindStrength : undefined}
            windAngle={windData ? windData.WindAngle : undefined}
            temperature={outdoorData ? outdoorData.Temperature : undefined}
            pressure={indoorData ? indoorData.Pressure : undefined}
          />
          {/*<pre>{JSON.stringify(station, null, 4)}</pre>*/}
        </>
      ) : (
        <Container>
          <ErrorText>There was a problem communicating with Netatmo.</ErrorText>
          <pre>{JSON.stringify(stationResponse)}</pre>
        </Container>
      )}
    </>
  );
}
