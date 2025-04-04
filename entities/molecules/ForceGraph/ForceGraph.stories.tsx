import { Meta, StoryObj } from "@storybook/react";
import { ForceGraph } from "./ForceGraph";

const meta: Meta<typeof ForceGraph> = {
  component: ForceGraph,
  argTypes: {},
  args: {
    nodes: [
      {
        id: "id1",
        name: "1",
      },
      {
        id: "id2",
        name: "2",
      },
    ],
    links: [
      {
        source: "id1",
        value: 1,
        target: "id2",
      },
    ],
  },
  tags: ["no-snaps"],
};
export default meta;

export const Default: StoryObj<typeof ForceGraph> = {};
