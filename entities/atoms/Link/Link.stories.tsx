import { Link } from "./Link";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";

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
    hoverFrame: false,
  },
};
export default meta;

export const Default: StoryObj<typeof Link> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const linkElement = canvas.getByTestId(Link.name);

    await expect(linkElement).toBeInTheDocument();
    await expect(linkElement).toHaveAttribute("href", `${args.href}`);
    await expect(linkElement).toHaveTextContent(`${args.children}`);
  },
};

export const Large: StoryObj<typeof Link> = {
  args: {
    variant: "large",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const linkElement = canvas.getByTestId(Link.name);

    await expect(linkElement).toBeInTheDocument();
    await expect(linkElement).toHaveAttribute("href", `${args.href}`);
    await expect(linkElement).toHaveTextContent(`${args.children}`);
  },
};

export const HoverFrame: StoryObj<typeof Link> = {
  args: {
    href: "https://www.alasdairmacrae.co.uk",
    hoverFrame: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const linkElement = canvas.getByTestId(Link.name);

    await expect(linkElement).toBeInTheDocument();
    await expect(linkElement).toHaveAttribute("href", `${args.href}`);
    await expect(linkElement).toHaveTextContent(`${args.children}`);
  },
};
