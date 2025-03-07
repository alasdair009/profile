import { Sun } from "./Sun";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof Sun> = {
  component: Sun,
  args: {
    lenseFlare: false,
  },
};
export default meta;

export const Default: StoryObj<typeof Sun> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sunElement = canvas.getByTestId(Sun.name);

    await expect(sunElement).toBeInTheDocument();
  },
};
