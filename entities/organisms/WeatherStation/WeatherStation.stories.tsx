import { WeatherStation, windDirections } from "./WeatherStation";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof WeatherStation> = {
  component: WeatherStation,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    rain: 0,
    temperature: 0,
    windStrength: 0,
    windAngle: "e",
    nextRising: new Date("2025-01-01 09:00:00"),
    nextSetting: new Date("2025-01-01 17:00:00"),
    nextNoon: new Date("2025-01-01 12:00:00"),
    sunAngle: 20,
    pressure: 1000,
    isPending: false,
    sunState: "above_horizon",
  },
  argTypes: {
    rain: {
      control: {
        type: "number",
        min: 0,
        step: 0.1,
      },
    },
    nextRising: {
      control: "date",
    },
    nextNoon: {
      control: "date",
    },
    nextSetting: {
      control: "date",
    },
    sunState: {
      control: { type: "select" },
      options: ["below_horizon", "above_horizon"],
    },
    temperature: {
      control: {
        type: "range",
        min: -20,
        max: 50,
        step: 0.1,
      },
    },
    windAngle: {
      control: { type: "select" },
      options: windDirections,
    },
    windStrength: {
      control: {
        type: "number",
        min: 0,
        step: 0.1,
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof WeatherStation> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const weatherStationElement = canvas.getByTestId(WeatherStation.name);

    await expect(weatherStationElement).toBeInTheDocument();
  },
};
