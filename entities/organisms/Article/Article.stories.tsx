import { Meta, StoryObj } from "@storybook/react";
import { Article } from "./Article";

const meta: Meta<typeof Article> = {
  component: Article,
  args: {
    heading: "Article heading",
  },
};
export default meta;

export const Default: StoryObj<typeof Article> = {};
