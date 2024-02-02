import { Rain } from "./Rain";
import { Meta, StoryObj } from "@storybook/react";
import { colors } from "@/entities";

const meta: Meta<typeof Rain> = {
  component: Rain,
  args: {
    rainDrops: 200,
    rainColor: "rgb(174,194,224)",
    speedRainTrough: 25,
  },
  argTypes: {
    rainDrops: {
      control: { type: "range", min: 10, max: 500, step: 1 },
    },
    rainColor: {
      control: {
        type: "color",
        presetColors: ["rgb(174,194,224)", colors.greenGrass],
      },
    },
    speedRainTrough: {
      control: { type: "range", min: 1, max: 25, step: 1 },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Rain> = {};
