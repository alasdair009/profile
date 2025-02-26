import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { Container, ErrorText, Heading, Paragraph } from "@/entities";
import { WeatherWrapper } from "@/app/portfolio/weather/components/WeatherWrapper";

export const metadata: Metadata = generateMetaData(
  "Weather",
  "A small app to load my weather station's live data",
  "portfolio/weather"
);

export default async function WeatherPage() {
  // const query = `https://api.netatmo.com/api/getstationsdata?get_favorites=false`;
  // let station,
  //   allData: WeatherStationData,
  //   indoorData: IndoorData | undefined,
  //   outdoorData: OutdoorData | undefined,
  //   rainData: RainData | undefined,
  //   windData: WindData | undefined;
  // const stationResponse = await fetch(query, {
  //   headers: {
  //     Authorization: `Bearer ${process.env.NETATMO_WEATHER_TOKEN}`,
  //   },
  // });
  //
  // if (stationResponse.ok) {
  //   allData = await stationResponse.json();
  //   station = allData.body.devices[0];
  //
  //   indoorData = station.dashboard_data;
  //
  //   outdoorData = station.modules.filter((obj) => {
  //     return obj.module_name === "Outdoor Weather Station";
  //   })[0].dashboard_data as OutdoorData;
  //
  //   rainData = station.modules.filter((obj) => {
  //     return obj.module_name === "Rain Gauge";
  //   })[0].dashboard_data as RainData;
  //
  //   windData = station.modules.filter((obj) => {
  //     return obj.module_name === "Anemometer";
  //   })[0].dashboard_data as WindData;
  // } else {
  //   console.log(
  //     `Warning: Could not get response from Netatmo using token of: ${process.env.NETATMO_WEATHER_TOKEN}`
  //   );
  //
  //   stationResponse.text().then((text) => {
  //     throw new Error(text);
  //   });
  // }

  return (
    <>
      <Heading>Weather</Heading>
      <Paragraph>
        This is a basic app used to read and display data collected from my own
        Netatmo Weather station. The app makes a request to the Netatmo UI via a
        bearing token to collect data from my device and updates the SVG below
        based on the data it receives.
      </Paragraph>
      <WeatherWrapper />
    </>
  );
}
