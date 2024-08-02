import { Meta, StoryObj } from "@storybook/react";
import { StatBox } from "./StatBox";

const meta: Meta<typeof StatBox> = {
  component: StatBox,
  args: {
    heading: "Record",
    name: "name of holder",
    value: "10",
  },
};
export default meta;

export const Default: StoryObj<typeof StatBox> = {};
