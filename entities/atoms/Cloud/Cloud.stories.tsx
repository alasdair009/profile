import { Meta, StoryObj } from "@storybook/react";
import { Cloud } from "./Cloud";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof Cloud> = {
  component: Cloud,
  args: {
    scale: 180,
    style: {
      height: 500,
    },
  },
  argTypes: {
    dispersion: {
      control: { type: "range", min: 10, max: 150, step: 1 },
    },
    scale: {
      control: { type: "range", min: 180, max: 500, step: 1 },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Cloud> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const cloudElement = canvas.getByTestId(Cloud.name);

    await expect(cloudElement).toBeInTheDocument();
  },
};
