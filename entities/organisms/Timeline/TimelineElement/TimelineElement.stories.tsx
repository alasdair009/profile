import { TimelineElement } from "./TimelineElement";
import { Meta, StoryObj } from "@storybook/react";
import jagexLogo from "../../../assets/jagex-logo.svg";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof TimelineElement> = {
  component: TimelineElement,
  args: {
    date: "2011 - present",
    icon: jagexLogo,
    alt: "first logo",
    children: "abc",
  },
};
export default meta;

export const Default: StoryObj<typeof TimelineElement> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const timelineElement = canvas.getByTestId(TimelineElement.name);

    await expect(timelineElement).toBeInTheDocument();
    await expect(canvas.getByText(args.date)).toBeInTheDocument();
    await expect(canvas.getByAltText(args.alt)).toBeInTheDocument();
    await expect(canvas.getByText(args.children as string)).toBeInTheDocument();
  },
};
