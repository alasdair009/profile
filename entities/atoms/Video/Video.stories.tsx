import { Video } from "./Video";
import { Meta, StoryObj } from "@storybook/react";
import trampolinePosterImage from "../../assets/trampoline-poster.webp";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof Video> = {
  component: Video,
  args: {
    poster: trampolinePosterImage,
    webmSrc:
      "https://ftjjvjgljna2ohz8.public.blob.vercel-storage.com/trampoline-cambs.webm",
  },
};
export default meta;

export const Default: StoryObj<typeof Video> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const videoElement = canvas.getByTestId(Video.name);

    await expect(videoElement).toBeInTheDocument();
    await expect(videoElement).toHaveAttribute(
      "poster",
      trampolinePosterImage.src
    );
    await expect(videoElement.children[0]).toHaveAttribute("src", args.webmSrc);
  },
};
