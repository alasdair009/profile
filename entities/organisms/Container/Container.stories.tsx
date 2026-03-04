import { Container } from "./Container";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

const meta: Meta<typeof Container> = {
  component: Container,
  argTypes: {
    children: {
      type: "string",
    },
  },
  args: {
    children: <>Container</>,
  },
};
export default meta;

export const Default: StoryObj<typeof Container> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const containerElement: HTMLDivElement = canvas.getByTestId(
      Container.displayName
    );

    await expect(containerElement).toBeInTheDocument();
  },
};
