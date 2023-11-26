import { LabelledInput } from "./LabelledInput";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LabelledInput> = {
  component: LabelledInput,
};
export default meta;

export const Text: StoryObj<typeof LabelledInput> = {
  args: {
    label: "Text entry",
    type: "text",
  },
};

export const Email: StoryObj<typeof LabelledInput> = {
  args: {
    label: "Email entry",
    type: "email",
  },
};

export const Passowrd: StoryObj<typeof LabelledInput> = {
  args: {
    label: "Password entry",
    type: "password",
  },
};

export const Required: StoryObj<typeof LabelledInput> = {
  args: {
    label: "Required entry",
    required: true,
  },
};

export const IsInvalid: StoryObj<typeof LabelledInput> = {
  args: {
    label: "isInvalid entry",
    required: true,
    isInvalid: true,
  },
};
