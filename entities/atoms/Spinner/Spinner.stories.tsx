import { Spinner } from "./Spinner";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
};
export default meta;

export const Default: StoryObj<typeof Spinner> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spinnerElement = canvas.getByTestId(Spinner.name);

    await expect(spinnerElement).toBeInTheDocument();
  },
};
