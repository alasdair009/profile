import { Meta, StoryObj } from "@storybook/nextjs";
import { Home } from "./Home";
import { expect, within } from "storybook/test";

const meta: Meta<typeof Home> = {
  component: Home,
  tags: ["no-snaps"],
  parameters: {
    chromatic: { disable: true },
  },
};

export default meta;

export const Default: StoryObj<typeof Home> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const homeElement: HTMLDivElement = canvas.getByTestId(Home.displayName);

    await expect(homeElement).toBeInTheDocument();
  },
};
