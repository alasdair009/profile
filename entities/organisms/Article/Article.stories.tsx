import { Meta, StoryObj } from "@storybook/react";
import { Article, getNiceDate } from "./Article";
import amLogo from "../../assets/am.svg";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof Article> = {
  component: Article,
  args: {
    heading: "Article heading",
    image: amLogo,
    date: new Date("2024-01-01"),
    children: "hello world",
  },
};
export default meta;

export const Default: StoryObj<typeof Article> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const articleElement: HTMLDivElement = canvas.getByTestId(Article.name);
    const dateElement: HTMLTimeElement = canvas.getByText(
      getNiceDate(args.date)
    );
    const imageElement: HTMLImageElement = canvas.getByAltText(args.heading);

    await expect(articleElement).toBeInTheDocument();
    await expect(canvas.getByText(args.heading)).toBeInTheDocument();
    await expect(imageElement).toBeInTheDocument();
    await expect(imageElement.src).toContain(amLogo.src);
    await expect(dateElement).toBeInTheDocument();
    await expect(dateElement).toHaveAttribute(
      "datetime",
      args.date.toISOString()
    );
    await expect(canvas.getByText(args.children as string)).toBeInTheDocument();
  },
};
