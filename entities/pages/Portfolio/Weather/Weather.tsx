import { Heading, Link, Paragraph } from "@/entities";
import { WeatherWrapper } from "@/app/portfolio/weather/components/WeatherWrapper";
import { HTMLAttributes } from "react";

type WeatherProps = {} & HTMLAttributes<HTMLDivElement>;

/**
 * Demo of Weather Station app.
 */
export function Weather({ ...rest }: WeatherProps) {
  return (
    <div data-testid={Weather.displayName} {...rest}>
      <Heading>Weather</Heading>
      <Paragraph>
        This is a basic app used to read and display data collected from my own
        Netatmo Weather station. The app makes a request to the Netatmo UI via a
        bearing token to collect data from my device and updates the SVG below
        based on the data it receives.
      </Paragraph>
      <Paragraph>
        You can read how I built this in my blog article{" "}
        <Link href="/blog/taking-the-weather-with-you-with-js">
          Taking the weather with you with JS
        </Link>
        .
      </Paragraph>
      <WeatherWrapper />
    </div>
  );
}
Weather.displayName = "Weather";
