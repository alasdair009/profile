import { Lightning } from "./Lightning";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Lightning> = {
  component: Lightning,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    frequency: 2,
    rainSpeedDuration: 0.3,
  },
  argTypes: {
    frequency: {
      control: { type: "range", min: 1, max: 3, step: 0.1 },
    },
    rainSpeedDuration: {
      control: { type: "range", min: 0.1, max: 0.6, step: 0.1 },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Lightning> = {};
