import { ContactForm } from "./ContactForm";
import { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

const onFormSubmittedSpy = fn();

const meta: Meta<typeof ContactForm> = {
  component: ContactForm,
  argTypes: {},
  args: {
    submitEndpoint: "#",
    onFormSubmitted: onFormSubmittedSpy,
  },
};
export default meta;

export const Default: StoryObj<typeof ContactForm> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const formElement = canvas.getByTestId(ContactForm.name);
    const messageTextArea = canvas.getByTestId(`${ContactForm.name}Message`);
    const submitButton = canvas.getByText("Send");

    await expect(formElement).toBeInTheDocument();

    await userEvent.type(messageTextArea, "some message here");

    const emailInput = canvas.getByTestId(`${ContactForm.name}Email`);
    await userEvent.type(emailInput, "someone@example.com");

    await userEvent.click(submitButton);
    // await expect(onFormSubmittedSpy).toHaveBeenCalledOnce();
  },
};
