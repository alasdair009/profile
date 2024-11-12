import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Snow } from "./Snow";

const meta: Meta<typeof Snow> = {
  component: Snow,
  args: {
    size: 20,
    numberOfFlakes: 50,
    style: {
      height: 500,
    },
  },
  argTypes: {
    size: {
      control: { type: "range", min: 1, max: 30, step: 1 },
    },
    numberOfFlakes: {
      control: { type: "range", min: 10, max: 100, step: 1 },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Snow> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const snowElement = canvas.getByTestId(Snow.name);
    const flakeElements = canvas.getAllByTestId(`${Snow.name}Flake`);

    await expect(snowElement).toBeInTheDocument();
    await expect(flakeElements).toHaveLength(args.numberOfFlakes || 0);
  },
};
