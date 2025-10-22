import { Meta, StoryObj } from "@storybook/nextjs";
import { Weather } from "./Weather";
import { expect, within } from "storybook/test";

const meta: Meta<typeof Weather> = {
  component: Weather,
};

export default meta;

export const Default: StoryObj<typeof Weather> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const runeScapeElement: HTMLDivElement = canvas.getByTestId(
      Weather.displayName
    );

    await expect(runeScapeElement).toBeInTheDocument();
  },
};
