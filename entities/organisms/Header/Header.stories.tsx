import { Header } from "./Header";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentType } from "react";

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

export const Default: StoryObj<typeof Header> = {};
