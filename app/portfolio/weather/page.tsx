import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";
import { Heading, Paragraph } from "@/entities";
import { WeatherWrapper } from "@/app/portfolio/weather/components/WeatherWrapper";

export const metadata: Metadata = generateMetaData(
  "Weather",
  "A small app to load my weather station's live data",
  "portfolio/weather"
);

export default async function WeatherPage() {
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
