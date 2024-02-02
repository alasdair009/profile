import { Rain } from "./Rain";
import { Meta, StoryObj } from "@storybook/react";
import { colors } from "@/entities";

const meta: Meta<typeof Rain> = {
  component: Rain,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 400,
    },
  },
  args: {
    rainDrops: 200,
    rainColor: "rgb(174,194,224)",
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
  },
};
export default meta;

export const Default: StoryObj<typeof Rain> = {};
