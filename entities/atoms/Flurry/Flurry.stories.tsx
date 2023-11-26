import { Flurry } from "./Flurry";
import { Meta, StoryObj } from "@storybook/react";

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

export const Default: StoryObj<typeof Flurry> = {};
