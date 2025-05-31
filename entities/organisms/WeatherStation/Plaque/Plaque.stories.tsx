import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";
import { Plaque } from "./Plaque";

const meta: Meta<typeof Plaque> = {
  component: Plaque,
};

export default meta;

export const Default: StoryObj<typeof Plaque> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const plaqueElement = canvas.getByTestId(Plaque.name);

    await expect(plaqueElement).toBeInTheDocument();
  },
};
