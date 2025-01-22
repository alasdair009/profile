import { Tree } from "./Tree";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof Tree> = {
  component: Tree,
  argTypes: {
    swayAmount: {
      control: {
        type: "range",
        min: 0,
        step: 1,
        max: 7,
      },
    },
  },
  args: {
    swayAmount: 3,
    windDirection: "none",
  },
};
export default meta;

export const Default: StoryObj<typeof Tree> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const treeElement = canvas.getByTestId(Tree.name);

    await expect(treeElement).toBeInTheDocument();
  },
};

export const Left: StoryObj<typeof Tree> = {
  args: {
    windDirection: "left",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const treeElement = canvas.getByTestId(Tree.name);

    await expect(treeElement).toBeInTheDocument();
  },
};

export const Right: StoryObj<typeof Tree> = {
  args: {
    windDirection: "right",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const treeElement = canvas.getByTestId(Tree.name);

    await expect(treeElement).toBeInTheDocument();
  },
};

export const Multiple: StoryObj<typeof Tree> = {
  args: {
    windDirection: "right",
  },
  render: (args) => (
    <div style={{ height: 500, position: "relative" }}>
      <Tree {...args} style={{ left: 0, position: "absolute", top: 50 }} />
      <Tree {...args} style={{ left: 45, position: "absolute", top: 80 }} />
      <Tree {...args} style={{ left: 10, position: "absolute", top: 100 }} />
      <Tree {...args} style={{ left: 90, position: "absolute", top: 20 }} />
      <Tree {...args} style={{ left: 120, position: "absolute", top: 75 }} />
      <Tree {...args} style={{ left: 60, position: "absolute", top: 150 }} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const treeElements = canvas.getAllByTestId(Tree.name);

    await expect(treeElements).toHaveLength(6);
  },
};
