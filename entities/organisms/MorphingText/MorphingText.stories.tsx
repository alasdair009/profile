import { Meta, StoryObj } from "@storybook/nextjs";
import { MorphingText } from "./MorphingText";
import { expect, within } from "storybook/test";

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

export const Default: StoryObj<typeof MorphingText> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const morphingTextElement = canvas.getByTestId(MorphingText.name);
    const textElements = canvas.getAllByTestId(`${MorphingText.name}Text`);
    const firstTextElement = canvas.getByText(args.values[0]);
    const lastTextElement = canvas.getByText(
      args.values[args.values.length - 1]
    );

    await expect(morphingTextElement).toBeInTheDocument();
    await expect(textElements).toHaveLength(args.values.length);
    await expect(firstTextElement).toBeInTheDocument();
    await expect(lastTextElement).toBeInTheDocument();
  },
};
