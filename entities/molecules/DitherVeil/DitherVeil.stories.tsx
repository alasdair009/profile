import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DitherVeil } from "./DitherVeil";
import { expect, within } from "storybook/test";

const meta: Meta<typeof DitherVeil> = {
  component: DitherVeil,
  args: {},
};
export default meta;

export const Default: StoryObj<typeof DitherVeil> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const codeBlockElement = canvas.getByTestId(DitherVeil.displayName);

    await expect(codeBlockElement).toBeInTheDocument();
  },
};
