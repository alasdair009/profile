import { LabelledTextArea } from "./LabelledTextArea";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LabelledTextArea> = {
  component: LabelledTextArea,
  args: {
    label: "Text area input",
    required: true,
    isInvalid: false,
    value: "hello world!",
    name: "textareainput",
  }
};
export default meta;

export const Default: StoryObj<typeof LabelledTextArea> = {};

export const Invalid: StoryObj<typeof LabelledTextArea> = {
  args: {
    required: true,
    isInvalid: true,
  },
};
