import { ContentPlate } from "./ContentPlate";
import { Meta, StoryObj } from "@storybook/react";
import { colors, Flame, Heading, Paragraph } from "@/entities";
import amLogo from "../../assets/am.svg";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof ContentPlate> = {
  component: ContentPlate,
  argTypes: {
    backgroundCss: {
      control: {
        type: "color",
        // presetColors: Object.values(colors),
      },
    },
    children: {
      type: "string",
    },
  },
  args: {
    backgroundCss: colors.blackEvil,
    children: (
      <>
        <Heading level="h3" data-testid={`${ContentPlate.name}Heading`}>
          Children
        </Heading>
        <Paragraph data-testid={`${ContentPlate.name}Paragraph`}>
          This is my content plate, there are many like it but this one is mine!
        </Paragraph>
      </>
    ),
  },
};
export default meta;

export const Default: StoryObj<typeof ContentPlate> = {
  args: {
    foregroundImage: amLogo,
    foregroundImageAlt: "AM Logo",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const contentPlateElement: HTMLDivElement = canvas.getByTestId(
      ContentPlate.name
    );

    await expect(contentPlateElement).toBeInTheDocument();
    await expect(
      canvas.getByAltText(args.foregroundImageAlt as string)
    ).toBeInTheDocument();
    await expect(contentPlateElement.children[0]).toHaveStyle(
      `background-color: ${args.backgroundCss}`
    );
  },
};

export const WithFlame: StoryObj<typeof ContentPlate> = {
  args: {
    flameColor: "red",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const contentPlateElement: HTMLDivElement = canvas.getByTestId(
      ContentPlate.name
    );

    await expect(contentPlateElement).toBeInTheDocument();
    await expect(canvas.getByTestId(Flame.name)).toBeInTheDocument();
  },
};
