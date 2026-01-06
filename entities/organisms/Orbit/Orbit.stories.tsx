import { Meta, StoryObj } from "@storybook/nextjs";
import { Orbit } from "./Orbit";
import { colors } from "@/styles/tokens";
import { expect, userEvent, waitFor, within } from "storybook/test";

const meta: Meta<typeof Orbit> = {
  component: Orbit,
  args: {
    color: colors.greenGrass,
    numberOfParticles: 5,
    showText: false,
  },
  argTypes: {
    numberOfParticles: {
      control: { type: "range", min: 1, max: 20, step: 1 },
    },
    particleColour: {
      control: {
        type: "color",
        presetColors: Object.values(colors),
      },
    },
  },
  tags: ["no-snaps"],
};
export default meta;

export const Default: StoryObj<typeof Orbit> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const orbitElement = canvas.getByTestId(Orbit.name);
    const particleElements = canvas.getAllByTestId(`${Orbit.name}Particle`);

    await expect(orbitElement).toBeInTheDocument();
    await expect(particleElements).toHaveLength(5);
  },
};
