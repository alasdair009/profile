import { TextMask } from "./TextMask";
import { Meta, StoryObj } from "@storybook/nextjs";
import { colors } from "@/entities";
import { expect, within } from "storybook/test";

const meta: Meta<typeof TextMask> = {
  component: TextMask,
  argTypes: {
    maskFill: {
      control: {
        type: "color",
        presetColors: [colors.whiteGhost, colors.blackEvil],
      },
    },
  },
  args: {
    maskFill: colors.whiteGhost,
    text: "hello",
  },
};
export default meta;

export const Default: StoryObj<typeof TextMask> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textMaskElement = canvas.getByTestId(TextMask.name);

    await expect(textMaskElement).toBeInTheDocument();
    await expect(textMaskElement).toHaveTextContent("hello");
  },
};
