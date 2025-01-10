import { Header } from "./Header";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentType } from "react";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof Header> = {
  component: Header,
  subcomponents: {
    NotificationButton: Header.NotificationButton as ComponentType<unknown>,
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
export default meta;

export const Default: StoryObj<typeof Header> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const headerElement = canvas.getByTestId(Header.name);

    await expect(headerElement).toBeInTheDocument();
  },
};
