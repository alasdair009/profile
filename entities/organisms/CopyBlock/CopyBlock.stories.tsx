import { CopyBlock } from "./CopyBlock";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";

const meta: Meta<typeof CopyBlock> = {
  component: CopyBlock,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    children:
      "This is a line of text that is rendered inside a CopyBlock. The text will wrap nicely and the entity is used for sections of a website where we just need text.",
  },
};
export default meta;

export const Default: StoryObj<typeof CopyBlock> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const copyBlockElement: HTMLDivElement = canvas.getByTestId(CopyBlock.name);

    await expect(copyBlockElement).toBeInTheDocument();
    await expect(copyBlockElement).toHaveTextContent(args.children as string);
  },
};
