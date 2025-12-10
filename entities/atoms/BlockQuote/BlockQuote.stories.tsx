import { BlockQuote } from "./BlockQuote";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";

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
    const blockQuoteElement = canvas.getByTestId(BlockQuote.displayName);

    await expect(blockQuoteElement).toBeInTheDocument();
    await expect(blockQuoteElement).toHaveTextContent(`${args.children}`);
  },
};

export const WithCite: StoryObj<typeof BlockQuote> = {
  args: {
    citeTitle: "Alasdair Macrae",
    citeUrl:
      "https://design.alasdairmacrae.co.uk/?path=/story/atoms-blockquote--with-cite",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const blockQuoteElement = canvas.getByTestId(BlockQuote.displayName);
    const citeLink = canvas.getByText(`${args.citeTitle}`);

    await expect(blockQuoteElement).toBeInTheDocument();
    await expect(blockQuoteElement).toHaveTextContent(`${args.children}`);
    await expect(blockQuoteElement.children[0]).toHaveAttribute(
      "cite",
      args.citeUrl
    );
    await expect(citeLink).toBeInTheDocument();
    await expect(citeLink).toHaveAttribute("href", args.citeUrl);
  },
};
