import { LabelledTextArea } from "./LabelledTextArea";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LabelledTextArea> = {
  component: LabelledTextArea,
};
export default meta;

export const Default: StoryObj<typeof LabelledTextArea> = {};

export const Invalid: StoryObj<typeof LabelledTextArea> = {
  args: {
    required: true,
    isInvalid: true,
  },
};
