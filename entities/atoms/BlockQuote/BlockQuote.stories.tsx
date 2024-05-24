import { BlockQuote } from "./BlockQuote";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof BlockQuote> = {
  component: BlockQuote,
  args: {
    children: "Some cool quote",
  },
};
export default meta;

export const Default: StoryObj<typeof BlockQuote> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const blockQuoteElement = canvas.getByTestId(BlockQuote.name);

    await expect(blockQuoteElement).toBeInTheDocument();
    await expect(blockQuoteElement).toHaveTextContent(`${args.children}`);
  },
};
