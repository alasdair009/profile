import { ErrorText } from "./ErrorText";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ErrorText> = {
  component: ErrorText,
  args: {
    children: "Please fix the mistake.",
    shown: true,
  },
};
export default meta;

export const Default: StoryObj<typeof ErrorText> = {};
