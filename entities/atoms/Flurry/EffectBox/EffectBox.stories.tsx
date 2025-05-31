import { EffectBox } from "./EffectBox";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";

const meta: Meta<typeof EffectBox> = {
  component: EffectBox,
  args: {
    index: 1,
    particlesPerPlate: 500,
  },
  argTypes: {
    particlesPerPlate: {
      control: { type: "range", min: 1, max: 500, step: 1 },
    },
    index: {
      control: {
        type: "range",
        min: 1,
        max: 4,
      },
    },
  },
  tags: ["no-snaps"],
};
export default meta;

export const Default: StoryObj<typeof EffectBox> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const effectBoxElement = canvas.getByTestId(EffectBox.name);

    await expect(effectBoxElement).toBeInTheDocument();
  },
};
