import { ContentPlate } from "./ContentPlate";
import { Meta, StoryObj } from "@storybook/react";
import { Heading, Paragraph } from "@/entities";

const meta: Meta<typeof ContentPlate> = {
  component: ContentPlate,
  argTypes: {
    children: {
      type: "string",
    },
  },
  args: {
    children: (
      <>
        <Heading level="h3">Children</Heading>
        <Paragraph>
          This is my content plate, there are many like it but this one is mine!
        </Paragraph>
      </>
    ),
  },
};
export default meta;

export const Default: StoryObj<typeof ContentPlate> = {};
