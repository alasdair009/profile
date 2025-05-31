import { Meta, StoryObj } from "@storybook/nextjs";
import { Loading } from "./Loading";
import { expect, within } from "storybook/test";

const meta: Meta<typeof Loading> = {
  component: Loading,
};

export default meta;

export const Default: StoryObj<typeof Loading> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const errorElement: HTMLDivElement = canvas.getByTestId(Loading.name);

    await expect(errorElement).toBeInTheDocument();
  },
};
