import { BlockQuote } from "./BlockQuote";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BlockQuote> = {
  component: BlockQuote,
  args: {
    children: "Some cool quote",
  },
};
export default meta;

export const Default: StoryObj<typeof BlockQuote> = {};
