import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DitherVeil } from "./DitherVeil";
import { expect, within } from "storybook/test";
import { colors } from "@/styles/tokens";

const meta: Meta<typeof DitherVeil> = {
  component: DitherVeil,
  argTypes: {
    levels: {
      control: {
        control: { type: "range", min: 2, max: 5, step: 1 },
      },
    },
    paperColor: {
      control: {
        type: "color",
        presetColors: Object.values(colors),
      },
    },
    pixelSize: {
      control: { type: "range", min: 1, max: 5, step: 0.1 },
    },
  },
  args: {
    levels: 2,
    paperColor: colors.greenGrass,
    pattern: "floyd",
    pixelSize: 2,
  },
};
export default meta;

export const Default: StoryObj<typeof DitherVeil> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const codeBlockElement = canvas.getByTestId(DitherVeil.displayName);

    await expect(codeBlockElement).toBeInTheDocument();
  },
};
