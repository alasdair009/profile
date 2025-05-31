import { Meta, StoryObj } from "@storybook/nextjs";
import { StatBox } from "./StatBox";
import { expect, within } from "storybook/test";

const meta: Meta<typeof StatBox> = {
  component: StatBox,
  args: {
    heading: "Record",
    name: "name of holder",
    value: "10",
  },
};
export default meta;

export const Default: StoryObj<typeof StatBox> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const statBoxElement = canvas.getByTestId(StatBox.name);

    await expect(statBoxElement).toBeInTheDocument();
    await expect(canvas.getByText(args.heading)).toBeInTheDocument();
    await expect(canvas.getByText(args.name)).toBeInTheDocument();
    await expect(canvas.getByText(args.value)).toBeInTheDocument();
  },
};
