import { VerticalTimeline } from "./VerticalTimeline";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof VerticalTimeline> = {
  component: VerticalTimeline,
  args: {
    entries: [
      {
        date: "2011 - present",
        icon: <></>,
        content: "abc",
      },
      {
        date: "2011",
        icon: <></>,
        content: "abc",
      },
      {
        date: "2011",
        icon: <></>,
        content: "abc",
      },
    ],
  },
};
export default meta;

export const Default: StoryObj<typeof VerticalTimeline> = {};
