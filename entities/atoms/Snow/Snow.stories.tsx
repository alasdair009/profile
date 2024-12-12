import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Snow } from "./Snow";

const meta: Meta<typeof Snow> = {
  component: Snow,
  args: {
    duration: 4,
    size: 20,
    numberOfFlakes: 50,
    style: {
      height: 500,
    },
  },
  argTypes: {
    duration: {
      control: { type: "range", min: 1, max: 5, step: 0.1 },
    },
    size: {
      control: { type: "range", min: 1, max: 30, step: 1 },
    },
    numberOfFlakes: {
      control: { type: "range", min: 10, max: 100, step: 1 },
    },
  },
  tags: ["no-snaps"],
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
