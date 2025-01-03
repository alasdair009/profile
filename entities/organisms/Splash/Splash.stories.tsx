import { Splash } from "./Splash";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof Splash> = {
  component: Splash,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
export default meta;

export const Default: StoryObj<typeof Splash> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const splashElement = canvas.getByTestId(Splash.name);

    await expect(splashElement).toBeInTheDocument();
  },
};
