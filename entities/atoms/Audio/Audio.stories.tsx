import { Meta, StoryObj } from "@storybook/react";
import { Audio } from "./Audio";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof Audio> = {
  component: Audio,
  args: {
    controls: true,
    src: "https://www.w3schools.com/tags/horse.mp3",
    autoPlay: false,
  },
};
export default meta;

export const Default: StoryObj<typeof Audio> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const audioElement = canvas.getByTestId(Audio.name);
    const sourceElement = canvas.getByTestId(`${Audio.name}Source`);

    await expect(audioElement).toBeInTheDocument();
    await expect(sourceElement).toBeInTheDocument();
    await expect(sourceElement).toHaveAttribute("src", args.src);
  },
};
