import { Lightning } from "./Lightning";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Lightning> = {
  component: Lightning,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
export default meta;

export const Default: StoryObj<typeof Lightning> = {};
