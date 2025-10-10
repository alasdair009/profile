import { Meta, StoryObj } from "@storybook/nextjs";
import { Skill } from "./Skill";
import { colors } from "@/entities";
import { expect, within } from "storybook/test";

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
  tags: ["no-snaps"],
};
export default meta;

export const Default: StoryObj<typeof Skill> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const skillElement = canvas.getByTestId(Skill.displayName);

    await expect(skillElement).toBeInTheDocument();
    await expect(canvas.getByText(args.heading)).toBeInTheDocument();
    await expect(canvas.getByText(args.copy)).toBeInTheDocument();
    await expect(skillElement).toHaveStyle(
      `background-color: ${args.background}`
    );
  },
};
