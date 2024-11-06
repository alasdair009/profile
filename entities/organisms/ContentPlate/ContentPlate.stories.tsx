import { ContentPlate } from "./ContentPlate";
import { Meta, StoryObj } from "@storybook/react";
import { colors, Heading, Paragraph } from "@/entities";
import amLogo from "../../assets/am.svg";

const meta: Meta<typeof ContentPlate> = {
  component: ContentPlate,
  argTypes: {
    backgroundCss: {},
    children: {
      type: "string",
    },
  },
  args: {
    backgroundCss: colors.blackEvil,
    foregroundImage: amLogo,
    foregroundImageAlt: "AM Logo",
    children: (
      <>
        <Heading level="h3">Children</Heading>
        <Paragraph>This is my content plate, there are many like it but this one is mine!</Paragraph>
      </>
    ),
  },
};
export default meta;

export const Default: StoryObj<typeof ContentPlate> = {};
