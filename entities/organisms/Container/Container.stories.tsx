import { Container } from "./Container";
import { Heading } from "../../atoms/Heading";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof Container> = {
  component: Container,
  argTypes: {
    children: {
      type: "string",
    },
  },
  args: {
    children: <Heading>Container</Heading>,
  },
};
export default meta;

export const Default: StoryObj<typeof Container> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const containerElement: HTMLDivElement = canvas.getByTestId(Container.name);

    await expect(containerElement).toBeInTheDocument();
  },
};
