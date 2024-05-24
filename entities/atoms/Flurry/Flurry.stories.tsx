import { Flurry } from "./Flurry";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof Flurry> = {
  component: Flurry,
  argTypes: {
    children: {
      type: "string",
    },
    particlesPerPlate: {
      control: { type: "range", min: 1, max: 500, step: 1 },
    },
    particleBaseDuration: {
      control: { type: "range", min: 1, max: 100, step: 1 },
    },
    particleBlocks: {
      control: { type: "range", min: 1, max: 6, step: 1 },
    },
  },
  args: {
    children: <h1>Flurry</h1>,
  },
};
export default meta;

export const Default: StoryObj<typeof Flurry> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const flurryElement = canvas.getByTestId(Flurry.name);
    const content = canvas.getByText("Flurry");

    await expect(flurryElement).toBeInTheDocument();
    await expect(content).toBeInTheDocument();
  },
};
