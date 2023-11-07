import { Heading } from "./Heading";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Heading> = {
  component: Heading,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Heading> = {
  args: {
    children: "Heading",
  },
};
