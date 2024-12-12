import { FixedPlate } from "./FixedPlate";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FixedPlate> = {
  component: FixedPlate,
  tags: ["no-snaps"],
};
export default meta;

export const Default: StoryObj<typeof FixedPlate> = {};
