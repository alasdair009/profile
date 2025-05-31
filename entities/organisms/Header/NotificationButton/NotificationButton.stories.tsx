import { Meta, StoryObj } from "@storybook/nextjs";
import { NotificationButton } from "./NotificationButton";

const meta: Meta<typeof NotificationButton> = {
  component: NotificationButton,
  args: {
    isSubscribed: false,
  },
};
export default meta;

export const Default: StoryObj<typeof NotificationButton> = {};
