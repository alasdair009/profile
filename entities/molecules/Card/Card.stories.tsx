import { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/entities/molecules/Card/Card";

const meta: Meta<typeof Card> = {
  component: Card,
  args: {
    title: "Article title",
    date: "1st January 1980",
    href: "#",
    imageAlt: "Image alt text",
  },
};
export default meta;

export const Default: StoryObj<typeof Card> = {};
