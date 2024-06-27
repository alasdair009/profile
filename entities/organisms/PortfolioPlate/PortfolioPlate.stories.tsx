import { Meta, StoryObj } from "@storybook/react";
import { PortfolioPlate } from "./PortfolioPlate";
import jdsLogo from "../../assets/jds-logo.svg";
import jagexLauncherImage from "../../assets/launcher.png";
import { colors, Link, Paragraph } from "@/entities";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof PortfolioPlate> = {
  component: PortfolioPlate,
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof PortfolioPlate> = {
  args: {
    contentPlateProps: {
      foregroundImage: jdsLogo,
      foregroundImageAlt: "White Jagex logo part-way through being drawn",
      backgroundCss: `linear-gradient(#1c1c1c,${colors.blackEvil})`,
    },
    heading: "JDS",
    children: (
      <>
        <Paragraph>
          Responsible for constructing a large design system to style and
          maintain consistent branding across all Jagex Publishing Platform
          products including websites and apps. This library was written in
          React and displayed via Storybook.js.
        </Paragraph>
        <Paragraph>
          The system covers all areas of visual implementation including
          colours, animation, typography, sizing, components and is all
          structured using atomic design principles.
        </Paragraph>
      </>
    ),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const linkElement = canvas.queryByTestId(Link.name);
    const headingElement = canvas.getByText(args.heading);

    await expect(linkElement).not.toBeInTheDocument();
    await expect(headingElement).toBeInTheDocument();
  },
};

export const WithUrl: StoryObj<typeof PortfolioPlate> = {
  args: {
    contentPlateProps: {
      foregroundImage: jagexLauncherImage,
      foregroundImageAlt:
        "The opening UI from the Jagex Launcher displaying RuneScape",
      backgroundCss: `linear-gradient(#07111b,${colors.blackEvil})`,
    },
    heading: "Jagex Launcher",
    url: "https://www.jagex.com/launcher",
    children: (
      <Paragraph>
        The Jagex Launcher is an application that is used to run all Jagex
        products. I was responsible for maintaining the{" "}
        <abbr title="Jagex Design System">JDS</abbr> (see above) integration
        that delivered the visual aesthetics and functionality for the
        front-end.
      </Paragraph>
    ),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const linkElement = canvas.getByTestId(Link.name);
    const headingElement = canvas.getByText(args.heading);

    await expect(linkElement).toBeInTheDocument();
    await expect(linkElement).toHaveAttribute("href", args.url);
    await expect(headingElement).toBeInTheDocument();
  },
};
