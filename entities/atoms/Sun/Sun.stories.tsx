import { Sun } from "./Sun";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

const meta: Meta<typeof Sun> = {
  component: Sun,
};
export default meta;

export const Default: StoryObj<typeof Sun> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sunElement = canvas.getByTestId(Sun.name);

    await expect(sunElement).toBeInTheDocument();
  },
};
