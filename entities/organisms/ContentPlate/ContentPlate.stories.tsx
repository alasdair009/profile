import { ContentPlate } from "./ContentPlate";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Flame, Heading, Paragraph } from "@/entities";
import amLogo from "../../assets/am.svg";
import { expect, within } from "storybook/test";
import { colors } from "@/styles/tokens";

const meta: Meta<typeof ContentPlate> = {
  component: ContentPlate,
  subcomponents: {
    ditherVeil: ContentPlate.DitherVeil,
    iframe: ContentPlate.IFrame,
    image: ContentPlate.Image,
  },
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
        <Heading level="h3" data-testid={`${ContentPlate.displayName}Heading`}>
          Children
        </Heading>
        <Paragraph data-testid={`${ContentPlate.displayName}Paragraph`}>
          This is my content plate, there are many like it but this one is mine!
        </Paragraph>
      </>
    ),
  },
};
export default meta;

export const Default: StoryObj<typeof ContentPlate> = {
  args: {
    foregroundContent: (
      <ContentPlate.Image
        foregroundImage={amLogo}
        foregroundImageAlt="AM Logo"
      />
    ),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const contentPlateElement: HTMLDivElement = canvas.getByTestId(
      ContentPlate.displayName
    );

    await expect(contentPlateElement).toBeInTheDocument();
    await expect(canvas.getByAltText("AM Logo")).toBeInTheDocument();
    await expect(contentPlateElement.children[0]).toHaveStyle(
      `background-color: ${args.backgroundCss}`
    );
  },
};

export const WithFlame: StoryObj<typeof ContentPlate> = {
  args: {
    foregroundContent: (
      <div style={{ height: "100%", width: "50%" }}>
        <Flame style={{ height: 250, width: "100%" }} baseColor="red" />
      </div>
    ),
  },
  parameters: {
    chromatic: { disable: true },
  },
  tags: ["no-snaps"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const contentPlateElement: HTMLDivElement = canvas.getByTestId(
      ContentPlate.displayName
    );

    await expect(contentPlateElement).toBeInTheDocument();
    await expect(canvas.getByTestId(Flame.displayName)).toBeInTheDocument();
  },
};
