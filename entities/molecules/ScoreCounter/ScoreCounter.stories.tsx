import { ScoreCounter } from "./ScoreCounter";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { Progress } from "@/entities/atoms/Progress";

const meta: Meta<typeof ScoreCounter> = {
  component: ScoreCounter,
  args: {
    value: 100,
  },
  argTypes: {
    value: {
      control: {
        type: "range",
        min: 0,
        max: 100,
      },
    },
  },
  tags: ["no-snaps"],
};
export default meta;

export const Default: StoryObj<typeof ScoreCounter> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const networkChartElement = canvas.getByTestId(ScoreCounter.name);
    const progressElement = canvas.getByTestId(`${Progress.name}Element`);

    await expect(networkChartElement).toBeInTheDocument();
    await expect(progressElement).toHaveAttribute("max", "100");
  },
};

export const Fifty: StoryObj<typeof ScoreCounter> = {
  args: {
    value: 50,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const networkChartElement = canvas.getByTestId(ScoreCounter.name);
    const progressElement = canvas.getByTestId(`${Progress.name}Element`);

    await expect(networkChartElement).toBeInTheDocument();
    await expect(progressElement).toHaveAttribute("max", "100");
  },
};
