import { Moon } from "./Moon";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";

const meta: Meta<typeof Moon> = {
  component: Moon,
};
export default meta;

export const Default: StoryObj<typeof Moon> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sunElement = canvas.getByTestId(Moon.name);

    await expect(sunElement).toBeInTheDocument();
  },
};
