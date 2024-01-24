import { Meta, StoryObj } from "@storybook/react";
import { Audio } from "./Audio";

const meta: Meta<typeof Audio> = {
  component: Audio,
  args: {
    controls: true,
    src: "https://www.w3schools.com/tags/horse.mp3",
  },
};
export default meta;

export const Default: StoryObj<typeof Audio> = {};
