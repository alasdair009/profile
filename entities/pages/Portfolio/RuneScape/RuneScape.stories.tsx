import { Meta, StoryObj } from "@storybook/nextjs";
import { RuneScape } from "./";
import { expect, within } from "storybook/test";

const meta: Meta<typeof RuneScape> = {
  component: RuneScape,
  args: {
    playerName: "allstar",
    skills: [
      {
        id: 0,
        name: "attack",
        rank: 1,
        level: 99,
        xp: 200000000,
      },
    ],
    activities: [
      {
        id: 0,
        name: "Castle Wars",
        rank: 1,
        score: 200000000,
      },
    ],
  },
};

export default meta;

export const Default: StoryObj<typeof RuneScape> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const runeScapeElement: HTMLDivElement = canvas.getByTestId(
      RuneScape.displayName
    );

    await expect(runeScapeElement).toBeInTheDocument();
  },
};
