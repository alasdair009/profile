import { Meta, StoryObj } from "@storybook/nextjs";
import { Carousel } from "./Carousel";
import { expect, within } from "storybook/test";
import amLogo from "../../assets/am.svg";
import { ComponentProps } from "react";

const oneImage: ComponentProps<typeof Carousel>["assets"] = [
  { src: amLogo, alt: "some alt text", title: "First" },
];

const fourImages: ComponentProps<typeof Carousel>["assets"] = [
  ...oneImage,
  { src: amLogo, alt: "some alt text", title: "Second" },
  { src: amLogo, alt: "some alt text", title: "Third" },
  { src: amLogo, alt: "some alt text", title: "Fourth" },
];

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  args: {
    assets: fourImages,
  },
  argTypes: {
    assets: {
      control: { type: "select" },
      options: ["one image", "four images"],
      mapping: {
        "one image": oneImage,
        "four images": fourImages,
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Carousel> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const carouselElement = canvas.getByTestId(Carousel.name);
    const carouselSlides = canvas.getAllByTestId(
      `${Carousel.displayName}Slide`
    );

    await expect(carouselElement).toBeInTheDocument();
    await expect(carouselSlides).toHaveLength(args.assets.length);
  },
};
