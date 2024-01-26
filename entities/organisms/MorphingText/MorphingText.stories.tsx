import { Meta, StoryObj } from "@storybook/react";
import { MorphingText } from "./MorphingText";

const meta: Meta<typeof MorphingText> = {
  component: MorphingText,
  args: {
    values: ["The", "possibilities", "are", "endless", "1", "2", "3"],
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
export default meta;

export const Default: StoryObj<typeof MorphingText> = {};
