import { Trampoline } from "./Trampoline";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";

const meta: Meta<typeof Trampoline> = {
  component: Trampoline,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
export default meta;

export const Default: StoryObj<typeof Trampoline> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trampolineElement = canvas.getByTestId(Trampoline.name);

    await expect(trampolineElement).toBeInTheDocument();
  },
};
