import { Paragraph } from "./Paragraph";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";
import { colors, fontSizes } from "@/styles/tokens";

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    color: {
      control: {
        type: "color",
        presetColors: Object.values(colors),
      },
    },
  },
  args: {
    children: "Paragraph of text",
    align: "left",
    color: colors.whiteGhost,
    fontSize: "medium",
    textWrap: "wrap",
  },
};
export default meta;

export const Default: StoryObj<typeof Paragraph> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const paragraphElement = canvas.getByTestId(Paragraph.displayName);
    const expectedFontSize = args.fontSize ? args.fontSize : "medium";
    console.log(expectedFontSize);
    console.log(fontSizes["medium"]);
    console.log(fontSizes[expectedFontSize]);

    await expect(paragraphElement).toBeInTheDocument();
    await expect(paragraphElement).toHaveTextContent(`${args.children}`);
    await expect(paragraphElement).toHaveStyle(`text-align: ${args.align}`);
    await expect(paragraphElement).toHaveStyle(`color: ${args.color}`);
    await expect(paragraphElement).toHaveStyle(
      `font-size: ${fontSizes[expectedFontSize]}px`
    );
    await expect(paragraphElement).toHaveStyle(`text-wrap: ${args.textWrap}`);
  },
};

export const Clamped: StoryObj<typeof Paragraph> = {
  args: {
    children:
      "A very long line of text to demonstrate the text wrapping feature will cut the text off at the second wrap point. A very long line of text to demonstrate the text wrapping feature will cut the text off at the second wrap point. A very long line of text to demonstrate the text wrapping feature will cut the text off at the second wrap point.",
    lines: 2,
  },
};
