import { Footer } from "./Footer";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { Button } from "@/entities";

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
