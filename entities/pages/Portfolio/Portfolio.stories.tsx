import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Portfolio } from "./Portfolio";
import { expect, within } from "storybook/test";

const meta: Meta<typeof Portfolio> = {
  component: Portfolio,
  tags: ["no-snaps"],
  parameters: {
    chromatic: { disable: true },
  },
};

export default meta;

export const Default: StoryObj<typeof Portfolio> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const portfolioElement: HTMLDivElement = canvas.getByTestId(
      Portfolio.displayName
    );

    await expect(portfolioElement).toBeInTheDocument();
  },
};
