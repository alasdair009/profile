import { Flight } from "./Flight";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";

const meta: Meta<typeof Flight> = {
  component: Flight,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {
    skyColor: {
      control: {
        type: "color",
      },
    },
    numberOfClouds: {
      control: {
        min: 0,
        max: 100,
        type: "range",
      },
    },
  },
  args: {
    numberOfClouds: 30,
    skyColor: "#7fb4c7",
  },
};
export default meta;

export const Default: StoryObj<typeof Flight> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const flightElement = canvas.getByTestId(Flight.name);
    const cloudElements = canvas.getAllByTestId(`${Flight.name}Cloud`);

    await expect(flightElement).toBeInTheDocument();
    await expect(cloudElements).toHaveLength(args.numberOfClouds || 0);
  },
};
