import { Paragraph } from "./Paragraph";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { colors, fontSizes } from "@/entities";

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  argTypes: {
    children: {
      control: {
        type: "text",
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
    const paragraphElement = canvas.getByTestId(Paragraph.name);

    await expect(paragraphElement).toBeInTheDocument();
    await expect(paragraphElement).toHaveTextContent(`${args.children}`);
    await expect(paragraphElement).toHaveStyle(`text-align: ${args.align}`);
    await expect(paragraphElement).toHaveStyle(`color: ${args.color}`);
    await expect(paragraphElement).toHaveStyle(
      `font-size: ${fontSizes[args.fontSize ? args.fontSize : "medium"].px}`
    );
    await expect(paragraphElement).toHaveStyle(`text-wrap: ${args.textWrap}`);
  },
};
