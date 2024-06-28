import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { LabelledRadio } from "./LabelledRadio";

const meta: Meta<typeof LabelledRadio> = {
  component: LabelledRadio,
  args: {
    name: "radioentry",
    required: true,
    isInvalid: false,
    label: "Radio entry",
  },
};
export default meta;

export const Default: StoryObj<typeof LabelledRadio> = {};

export const Invalid: StoryObj<typeof LabelledRadio> = {
  args: {
    isInvalid: true,
  },
};
