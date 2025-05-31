import { Meta, StoryObj } from "@storybook/nextjs";
import { NetworkChart } from "./NetworkChart";
import { expect, fn, waitFor, within } from "storybook/test";

const meta: Meta<typeof NetworkChart> = {
  component: NetworkChart,
  argTypes: {},
  args: {
    nodes: [
      {
        id: "1",
        label: "first node",
      },
      {
        id: "2",
        label: "second node",
      },
      {
        id: "3",
        label: "third node",
      },
    ],
    edges: [
      {
        id: "1->2",
        source: "1",
        target: "2",
      },
      {
        id: "1->3",
        source: "1",
        target: "3",
      },
    ],
    onNodeClick: fn(),
  },
  tags: ["no-snaps"],
};
export default meta;

export const Default: StoryObj<typeof NetworkChart> = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await waitFor(() =>
      expect(canvas.getByTestId(NetworkChart.name)).toBeInTheDocument()
    );
  },
};
