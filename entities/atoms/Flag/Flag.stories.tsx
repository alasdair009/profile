import { Flag } from "./Flag";
import { Meta, StoryObj } from "@storybook/nextjs";
import { expect, within } from "storybook/test";
import amLogo from "../../assets/am.svg";
import { colors } from "@/entities";

const meta: Meta<typeof Flag> = {
  component: Flag,
  args: {
    src: amLogo.src,
    alt: "AM Logo",
    showPoll: true,
    animateFlag: true,
    flagBackground: colors.greenGrass,
  },
  argTypes: {
    flagBackground: {
      control: {
        type: "color",
        presetColors: Object.values(colors),
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Flag> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const flagElement = canvas.getByTestId(Flag.name);

    await expect(flagElement).toBeInTheDocument();
  },
};
