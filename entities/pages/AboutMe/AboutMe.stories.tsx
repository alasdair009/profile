import { Meta, StoryObj } from "@storybook/nextjs";
import { AboutMe } from "./AboutMe";
import { expect, within } from "storybook/test";

const meta: Meta<typeof AboutMe> = {
  component: AboutMe,
  tags: ["no-snaps"],
  parameters: {
    chromatic: { disable: true },
  },
};

export default meta;

export const Default: StoryObj<typeof AboutMe> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const homeElement: HTMLDivElement = canvas.getByTestId(AboutMe.displayName);

    await expect(homeElement).toBeInTheDocument();
  },
};
