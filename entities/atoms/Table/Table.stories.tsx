import { Table } from "./Table";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof Table> = {
  component: Table,
  args: {
    children: (
      <>
        <thead>
          <tr>
            <th>col 1 heading</th>
            <th>col 2 heading</th>
            <th>col 3 heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-title="col 1 heading">col 1 row 1</td>
            <td data-title="col 2 heading">col 2 row 1</td>
            <td data-title="col 3 heading">col 3 row 1</td>
          </tr>
          <tr>
            <td data-title="col 1 heading">col 1 row 2</td>
            <td data-title="col 2 heading">col 2 row 2</td>
            <td data-title="col 3 heading">col 3 row 2</td>
          </tr>
          <tr>
            <td data-title="col 1 heading">col 1 row 3</td>
            <td data-title="col 2 heading">col 2 row 3</td>
            <td data-title="col 3 heading">col 3 row 3</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th data-title="col 1 foot label">col 1 foot</th>
            <th data-title="col 2 foot label">col 2 foot</th>
            <th data-title="col 3 foot label">col 3 foot</th>
          </tr>
        </tfoot>
      </>
    ),
  },
};
export default meta;

export const Default: StoryObj<typeof Table> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByTestId(Table.name)).toBeInTheDocument();
    await expect(canvas.getByText("col 1 row 1")).toBeInTheDocument();
  },
};

export const Responsive: StoryObj<typeof Table> = {
  args: {
    breakAt: "xlarge",
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        height: 600,
      },
    },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByTestId(Table.name)).toBeInTheDocument();
    await expect(canvas.getByText("col 1 row 1")).toBeInTheDocument();
  },
};
