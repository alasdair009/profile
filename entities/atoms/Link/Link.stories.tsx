import { Link } from "./Link";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
  component: Link,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    href: "#",
    children: "Go to page",
  },
};
export default meta;

export const Default: StoryObj<typeof Link> = {};
