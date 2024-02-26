import { Meta, StoryObj } from "@storybook/react";
import { Skill } from "./Skill";
import { colors } from "@/entities";

const meta: Meta<typeof Skill> = {
  component: Skill,
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
  args: {
    value: 100,
    heading: "Awesomeness",
    copy: "How awesome is this?",
    background: colors.greenGrass,
    grid: {
      xsmall: {},
      small: {},
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Skill> = {};
