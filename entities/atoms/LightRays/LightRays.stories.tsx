import { LightRays } from "./LightRays";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

const meta: Meta<typeof LightRays> = {
  component: LightRays,
  args: {
    style: {
      minHeight: 200,
    },
  },
};
export default meta;

export const Default: StoryObj<typeof LightRays> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sunElement = canvas.getByTestId(LightRays.name);

    await expect(sunElement).toBeInTheDocument();
  },
};
