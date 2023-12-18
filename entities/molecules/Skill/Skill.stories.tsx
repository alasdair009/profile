import { Meta, StoryObj } from "@storybook/react";
import { Skill } from "./Skill";

const meta: Meta<typeof Skill> = {
  component: Skill,
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Skill> = {};
