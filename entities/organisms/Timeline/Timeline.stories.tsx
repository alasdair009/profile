import { Timeline } from "./Timeline";
import { Meta, StoryObj } from "@storybook/react";
import jagexLogo from "../../assets/jagex-logo.svg";

const meta: Meta<typeof Timeline> = {
  component: Timeline,
  args: {
    entries: [
      {
        date: "2011 - present",
        icon: jagexLogo,
        alt: "",
        content: "abc",
      },
      {
        date: "2011",
        icon: jagexLogo,
        alt: "",
        content: "abc",
      },
      {
        date: "2011",
        icon: jagexLogo,
        alt: "",
        content: "abc",
      },
    ],
  },
};
export default meta;

export const Default: StoryObj<typeof Timeline> = {};
