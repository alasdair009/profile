import { WeatherStation, windDirections } from "./WeatherStation";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";

const midnight = new Date("2025-01-01 00:00:00");
const dawn = new Date("2025-01-01 07:00:00");
const noon = new Date("2025-01-01 12:00:00");
const dusk = new Date("2025-01-01 17:00:00");

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
    nextRising: dawn,
    nextSetting: dusk,
    nextNoon: noon,
    now: noon,
    sunAngle: 20,
    pressure: 1000,
    cloudCover: 66,
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
    now: {
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
    cloudCover: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
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

export const Rise: StoryObj<typeof WeatherStation> = {
  args: {
    now: dawn,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const weatherStationElement = canvas.getByTestId(WeatherStation.name);

    await expect(weatherStationElement).toBeInTheDocument();
  },
};

export const Set: StoryObj<typeof WeatherStation> = {
  args: {
    now: dusk,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const weatherStationElement = canvas.getByTestId(WeatherStation.name);

    await expect(weatherStationElement).toBeInTheDocument();
  },
};

export const Midnight: StoryObj<typeof WeatherStation> = {
  args: {
    now: midnight,
    nextRising: new Date("2025-01-02 07:00:00"),
    sunState: "below_horizon",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const weatherStationElement = canvas.getByTestId(WeatherStation.name);

    await expect(weatherStationElement).toBeInTheDocument();
  },
};
