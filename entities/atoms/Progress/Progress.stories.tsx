import { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@/entities/atoms/Progress/Progress";

const meta: Meta<typeof Progress> = {
  component: Progress,
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    max: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Progress> = {};
export const Zero: StoryObj<typeof Progress> = {
  args: {
    value: 0,
  },
};
export const Fifty: StoryObj<typeof Progress> = {
  args: {
    value: 50,
  },
};
