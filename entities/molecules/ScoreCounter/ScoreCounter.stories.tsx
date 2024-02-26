import { ScoreCounter } from "./ScoreCounter";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ScoreCounter> = {
  component: ScoreCounter,
  args: {
    value: 100
  },
  argTypes: {
    value: {
      control: {
        type: "range",
        min: 0,
        max: 100,
      }
    }
  }
};
export default meta;

export const Default: StoryObj<typeof ScoreCounter> = {};

export const Fifty: StoryObj<typeof ScoreCounter> = {
  args: {
    value: 50,
  }
};
