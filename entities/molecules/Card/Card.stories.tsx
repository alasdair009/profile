import { Meta, StoryObj } from "@storybook/nextjs";
import { Card } from "./Card";
import { expect, within } from "storybook/test";
import { Link } from "../../atoms/Link";

const meta: Meta<typeof Card> = {
  component: Card,
  args: {
    title: "Article title",
    date: new Date("1 January 1980"),
    href: "#",
    imageAlt: "Image alt text",
  },
};
export default meta;

export const Default: StoryObj<typeof Card> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const cardElement = canvas.getByTestId(Card.name);

    await expect(cardElement).toBeInTheDocument();
    await expect(canvas.getByText(args.title)).toBeInTheDocument();
    await expect(canvas.getByText("1 Jan 1980")).toBeInTheDocument();
    await expect(canvas.getByTestId(`${Card.name}Link`)).toHaveAttribute(
      "href",
      "#"
    );
    await expect(canvas.getByAltText(`${args.imageAlt}`)).toBeInTheDocument();
  },
};
