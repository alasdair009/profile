import { ThreeDimensionalLogo } from "./ThreeDimensionalLogo";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof ThreeDimensionalLogo> = {
  component: ThreeDimensionalLogo,
};
export default meta;

export const Default: StoryObj<typeof ThreeDimensionalLogo> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spinnerElement = canvas.getByTestId(ThreeDimensionalLogo.name);

    await expect(spinnerElement).toBeInTheDocument();
  },
};
