import { Meta, StoryObj } from "@storybook/react";
import { NetworkChart } from "./NetworkChart";
import { expect, fn, waitFor, within } from "@storybook/test";

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
};
export default meta;

export const Default: StoryObj<typeof NetworkChart> = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await waitFor(() =>
      expect(canvas.getByTestId(NetworkChart.name)).toBeInTheDocument()
    );

    const networkChartElement = canvas.getByTestId(NetworkChart.name);
    const htmlCanvasElement =
      networkChartElement.children[0].children[0].children[0].children[0];
    await expect(htmlCanvasElement.tagName).toBe("CANVAS");
  },
};
