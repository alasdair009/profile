import { Meta, StoryObj } from "@storybook/react";
import { Article } from "./Article";
import amLogo from "../../assets/am.svg";

const meta: Meta<typeof Article> = {
  component: Article,
  args: {
    heading: "Article heading",
    image: amLogo,
    date: new Date("2024-01-01"),
    children: "hello world",
  },
};
export default meta;

export const Default: StoryObj<typeof Article> = {};
