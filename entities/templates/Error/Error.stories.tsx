import { Meta, StoryObj } from "@storybook/react";
import { Error } from "./Error";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof Error> = {
  component: Error,
  args: {
    errorCode: 404,
    errorHeading: "Whoops!",
    errorText: "Could not find the page you were looking",
  },
};
export default meta;

export const Default: StoryObj<typeof Error> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const errorElement: HTMLDivElement = canvas.getByTestId(Error.name);

    await expect(errorElement).toBeInTheDocument();
  },
};
