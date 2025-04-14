import { Lightning } from "./Lightning";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof Lightning> = {
  component: Lightning,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    frequency: 2,
  },
  argTypes: {
    frequency: {
      control: { type: "range", min: 1, max: 3, step: 0.1 },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Lightning> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const lightningElement = canvas.getByTestId(Lightning.name);

    await expect(lightningElement).toBeInTheDocument();
  },
};
