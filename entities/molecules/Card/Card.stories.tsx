import { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/entities/molecules/Card/Card";

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

export const Default: StoryObj<typeof Card> = {};
