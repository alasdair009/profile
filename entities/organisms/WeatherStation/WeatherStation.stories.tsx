import { WeatherStation } from "./WeatherStation";
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
    windAngle: 0,
  },
  argTypes: {
    rain: {
      control: {
        type: "number",
        min: 0,
        step: 0.1,
      },
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
      control: { type: "range", min: 0, max: 360 },
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
