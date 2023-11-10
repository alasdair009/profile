import { Container } from "./Container";
import { Heading } from "../../atoms/Heading";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Container> = {
  component: Container,
  argTypes: {
    children: {
      type: "string",
    }
  },
  args: {
    children: <Heading>Container</Heading>,
  },
};
export default meta;

export const Default: StoryObj<typeof Container> = {};
