import { Timeline } from "./Timeline";
import { Meta, StoryObj } from "@storybook/nextjs";
import jagexLogo from "../../assets/jagex-logo.svg";
import { expect, within } from "storybook/test";
import { TimelineElement } from "@/entities/organisms/Timeline/TimelineElement";

const meta: Meta<typeof Timeline> = {
  component: Timeline,
  args: {
    entries: [
      {
        date: "2011 - present",
        icon: jagexLogo,
        alt: "first logo",
        content: "abc",
      },
      {
        date: "2010",
        icon: jagexLogo,
        alt: "second logo",
        content: "def",
      },
      {
        date: "2009",
        icon: jagexLogo,
        alt: "third logo",
        content: "ghi",
      },
    ],
  },
  subcomponents: {
    // @ts-ignore
    TimelineElement: TimelineElement,
  },
};
export default meta;

export const Default: StoryObj<typeof Timeline> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const timelineElement = canvas.getByTestId(Timeline.name);
    const timelineEntries = canvas.getAllByTestId(TimelineElement.name);
    const firstTitle = args.entries[0].content as string;
    const firstDate = args.entries[0].date;
    const firstLogo = args.entries[0].alt;
    const lastTitle = args.entries[2].content as string;
    const lastDate = args.entries[2].date;
    const lastLogo = args.entries[2].alt;

    await expect(timelineElement).toBeInTheDocument();
    await expect(timelineEntries).toHaveLength(args.entries.length);
    await expect(canvas.getByText(firstTitle)).toBeInTheDocument();
    await expect(canvas.getByText(firstDate)).toBeInTheDocument();
    await expect(canvas.getByAltText(firstLogo)).toBeInTheDocument();
    await expect(canvas.getByText(lastTitle)).toBeInTheDocument();
    await expect(canvas.getByText(lastDate)).toBeInTheDocument();
    await expect(canvas.getByAltText(lastLogo)).toBeInTheDocument();
  },
};
