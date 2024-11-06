import { Meta, StoryObj } from "@storybook/react";
import { Progress, ProgressProps } from "@/entities/atoms/Progress/Progress";
import { expect, within } from "@storybook/test";
import { Heading, Link } from "@/entities";
import { HeadingProps } from "@/entities/atoms/Heading/Heading";

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
  args: {
    value: 100,
    max: 100,
  },
};
export default meta;

export const Default: StoryObj<typeof Progress> = {
  play: async ({ args, canvasElement }) => progressTest(args, canvasElement),
};
export const Zero: StoryObj<typeof Progress> = {
  args: {
    value: 0,
  },
  play: async ({ args, canvasElement }) => progressTest(args, canvasElement),
};
export const Fifty: StoryObj<typeof Progress> = {
  args: {
    value: 50,
  },
  play: async ({ args, canvasElement }) => progressTest(args, canvasElement),
};

const progressTest = async (args: ProgressProps, canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  const progressWrapper = canvas.getByTestId(Progress.name);
  const progressElement = canvas.getByTestId(`${Progress.name}Element`);

  await expect(progressWrapper).toBeInTheDocument();
  await expect(progressElement).toBeInTheDocument();
  await expect(progressElement).toHaveAttribute("max", `${args.max}`);
  await expect(progressElement).toHaveAttribute("value", `${args.value}`);
};
