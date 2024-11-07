import { Meta, StoryObj } from "@storybook/react";
import { FanPlayer } from "./FanPlayer";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof FanPlayer> = {
  component: FanPlayer,
};
export default meta;

export const Default: StoryObj<typeof FanPlayer> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const fanElement = canvas.getByTestId(FanPlayer.name);

    await expect(fanElement).toBeInTheDocument();
  },
};
