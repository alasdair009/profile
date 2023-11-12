import { Heading } from "./Heading";
import { Meta, StoryObj } from "@storybook/react";

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
  },
  args: {
    align: "left",
    level: "h1",
  },
};
export default meta;

export const h1: StoryObj<typeof Heading> = {
  args: {
    children: "Heading 1",
  },
};

export const h2: StoryObj<typeof Heading> = {
  args: {
    level: "h2",
    children: "Heading 2",
  },
};

export const h3: StoryObj<typeof Heading> = {
  args: {
    level: "h3",
    children: "Heading 3",
  },
};

export const h4: StoryObj<typeof Heading> = {
  args: {
    level: "h4",
    children: "Heading 4",
  },
};

export const h5: StoryObj<typeof Heading> = {
  args: {
    level: "h5",
    children: "Heading 5",
  },
};

export const h6: StoryObj<typeof Heading> = {
  args: {
    level: "h6",
    children: "Heading 6",
  },
};
