import { Heading, HeadingProps } from "./Heading";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { colors, Flurry } from "@/entities";

const meta: Meta<typeof Heading> = {
  component: Heading,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    align: {
      options: ["left", "center", "right"],
    },
    level: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    as: {
      options: [undefined, "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    color: {
      control: {
        type: "color",
        presetColors: Object.values(colors),
      },
    },
  },
  args: {
    align: "left",
    level: "h1",
    textShadow: false,
  },
};
export default meta;

export const H1: StoryObj<typeof Heading> = {
  args: {
    children: "Heading 1",
  },
  play: async ({ args, canvasElement }) => headerTest(args, canvasElement),
};

export const H2: StoryObj<typeof Heading> = {
  args: {
    level: "h2",
    children: "Heading 2",
  },
  play: async ({ args, canvasElement }) => headerTest(args, canvasElement),
};

export const H3: StoryObj<typeof Heading> = {
  args: {
    level: "h3",
    children: "Heading 3",
  },
  play: async ({ args, canvasElement }) => headerTest(args, canvasElement),
};

export const H4: StoryObj<typeof Heading> = {
  args: {
    level: "h4",
    children: "Heading 4",
  },
  play: async ({ args, canvasElement }) => headerTest(args, canvasElement),
};

export const H5: StoryObj<typeof Heading> = {
  args: {
    level: "h5",
    children: "Heading 5",
  },
  play: async ({ args, canvasElement }) => headerTest(args, canvasElement),
};

export const H6: StoryObj<typeof Heading> = {
  args: {
    level: "h6",
    children: "Heading 6",
  },
  play: async ({ args, canvasElement }) => headerTest(args, canvasElement),
};

const headerTest = async (
  args: HeadingProps<any>,
  canvasElement: HTMLElement
) => {
  const canvas = within(canvasElement);
  const headingElement = canvas.getByTestId(Heading.name);

  await expect(headingElement).toBeInTheDocument();
  await expect(headingElement).toHaveTextContent(`${args.children}`);
  await expect(headingElement).toHaveStyle(`text-align: ${args.align}`);
  await expect(headingElement.tagName.toLowerCase()).toBe(args.level);
};
