import { ThreeDLogo } from "./ThreeDLogo";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";

const meta: Meta<typeof ThreeDLogo> = {
  component: ThreeDLogo,
};
export default meta;

export const Default: StoryObj<typeof ThreeDLogo> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const threeDLogoElement = canvas.getByTestId(ThreeDLogo.displayName);

    await expect(threeDLogoElement).toBeInTheDocument();
  },
};
