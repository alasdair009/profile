import { Meta, StoryObj } from "@storybook/nextjs";
import { Rollercoaster, Rollercoasters } from "./Rollercoasters";
import { expect, within } from "storybook/test";

const exampleRollercoaster: Rollercoaster = {
  title: "Rollercoaster 1",
  speed: 100,
  height: 100,
  length: 1000,
  inversions: 10,
  themeparkTitle: "Forest Frontiers",
  themeparkLogo: {
    asset: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
  },
  themeparkCountry: "uk",
  firstRidden: "1999-03-31 12:00:00",
  coords: "0,0",
};

const meta: Meta<typeof Rollercoasters> = {
  component: Rollercoasters,
  args: {
    rollercoasters: [exampleRollercoaster],
    fastestRollercoaster: exampleRollercoaster,
    tallestRollercoaster: exampleRollercoaster,
    longestRollercoaster: exampleRollercoaster,
    mostInvertedRollercoaster: exampleRollercoaster,
  },
};

export default meta;

export const Default: StoryObj<typeof Rollercoasters> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const homeElement: HTMLDivElement = canvas.getByTestId(
      Rollercoasters.displayName
    );

    await expect(homeElement).toBeInTheDocument();
  },
};
