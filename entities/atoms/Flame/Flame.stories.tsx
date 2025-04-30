import { defaultBaseColor, Flame } from "./Flame";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { colors } from "@/entities";

const meta: Meta<typeof Flame> = {
  component: Flame,
  args: {
    maxLife: 40,
    speed: 3,
    size: 10,
    particlesPerFrame: 20,
    spreadPercentage: 10,
    baseColor: defaultBaseColor,
  },
  argTypes: {
    baseColor: {
      control: {
        type: "color",
      },
    },
    maxLife: {
      control: {
        type: "range",
        min: 1,
        max: 40,
      },
    },
    speed: {
      control: {
        type: "range",
        min: 1,
        max: 5,
      },
    },
    size: {
      control: {
        type: "range",
        min: 1,
        max: 20,
      },
    },
    particlesPerFrame: {
      control: {
        type: "range",
        min: 10,
        max: 100,
      },
    },
    spreadPercentage: {
      control: {
        type: "range",
        min: 0,
        max: 100,
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Flame> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const flameElement = canvas.getByTestId(Flame.name);

    await expect(flameElement).toBeInTheDocument();
  },
};

export const Green: StoryObj<typeof Flame> = {
  args: {
    baseColor: colors.greenGrass,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const flameElement = canvas.getByTestId(Flame.name);

    await expect(flameElement).toBeInTheDocument();
  },
};

export const Blue: StoryObj<typeof Flame> = {
  args: {
    baseColor: colors.blueSea,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const flameElement = canvas.getByTestId(Flame.name);

    await expect(flameElement).toBeInTheDocument();
  },
};
