import { Meta, StoryObj } from "@storybook/nextjs";
import { Trampolining } from "./Trampolining";
import { expect, within } from "storybook/test";

const meta: Meta<typeof Trampolining> = {
  component: Trampolining,
};

export default meta;

export const Default: StoryObj<typeof Trampolining> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const trampolineElement: HTMLDivElement = canvas.getByTestId(
      Trampolining.displayName
    );

    await expect(trampolineElement).toBeInTheDocument();
  },
};
