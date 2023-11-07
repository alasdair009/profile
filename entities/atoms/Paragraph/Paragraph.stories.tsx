import { Paragraph } from "./Paragraph";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Paragraph> = {
  args: {
    children: "Paragraph of text",
  },
};
