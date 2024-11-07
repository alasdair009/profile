import { Spacer } from "./Spacer";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof Spacer> = {
  component: Spacer,
  args: {
    multiplier: 1,
  },
};
export default meta;

export const Default: StoryObj<typeof Spacer> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spacerElement = canvas.getByTestId(Spacer.name);

    await expect(spacerElement).toBeInTheDocument();
    await expect(spacerElement).toHaveStyle("margin-bottom: 8px");
  },
};

export const Eight: StoryObj<typeof Spacer> = {
  args: {
    multiplier: 8,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spacerElement = canvas.getByTestId(Spacer.name);

    await expect(spacerElement).toBeInTheDocument();
    await expect(spacerElement).toHaveStyle("margin-bottom: 64px");
  },
};
