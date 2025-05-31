import { Meta, StoryObj } from "@storybook/nextjs";
import { Figure } from "./Figure";
import { expect, within } from "storybook/test";
import amLogo from "../../assets/am.svg";

const meta: Meta<typeof Figure> = {
  component: Figure,
  args: {
    alt: "Alt text about the image.",
    caption: "A caption about the image.",
    src: amLogo.src,
  },
};
export default meta;

export const Default: StoryObj<typeof Figure> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const figureElement = canvas.getByTestId(Figure.name);

    await expect(figureElement).toBeInTheDocument();
  },
};
