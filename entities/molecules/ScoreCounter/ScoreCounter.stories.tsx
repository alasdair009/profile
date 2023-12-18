import { ScoreCounter } from "./ScoreCounter";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ScoreCounter> = {
  component: ScoreCounter,
};
export default meta;

export const Default: StoryObj<typeof ScoreCounter> = {};
