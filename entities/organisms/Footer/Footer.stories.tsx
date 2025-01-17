import { Footer } from "./Footer";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof Footer> = {
  component: Footer,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
export default meta;

export const Default: StoryObj<typeof Footer> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const footerElement = canvas.getByTestId(Footer.name);

    await expect(footerElement).toBeInTheDocument();
  },
};
