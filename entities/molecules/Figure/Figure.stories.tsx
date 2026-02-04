import { Meta, StoryObj } from "@storybook/nextjs";
import { Figure } from "./Figure";
import { expect, within } from "storybook/test";
import amLogo from "../../assets/am.svg";

const meta: Meta<typeof Figure> = {
  component: Figure,
  args: {
    imageProps: {
      alt: "Alt text about the image.",
      src: amLogo,
      sizes: "100vw",
      loading: "lazy",
      fill: true,
    },
    caption: "A caption about the image.",
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
