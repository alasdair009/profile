"use client";
import { InputWrapper, Root, SubmittedMessage } from "./styles";
import { FormEvent, HTMLAttributes, useState } from "react";
import {
  Button,
  ErrorText,
  LabelledInput,
  LabelledTextArea,
  Paragraph,
  Spacer,
} from "@/entities";
import axios from "axios";

type ContactFormProps = {
  /**
   * URL to post the submission to.
   */
  submitEndpoint: string;
  /**
   * Function to call on submit
   */
  onFormSubmitted?: () => void;
} & Exclude<HTMLAttributes<HTMLFormElement>, "onSubmit">;

/**
 * Standard contact form
 */
export function ContactForm({
  submitEndpoint,
  onFormSubmitted,
  ...rest
}: ContactFormProps) {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: "" },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok: boolean, msg = "Something went wrong") => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (
    e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>
  ) => {
    e.persist();
    const targetElement = e.target as HTMLInputElement | HTMLTextAreaElement;
    setInputs((prev) => ({
      ...prev,
      [targetElement.id]: targetElement.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: "" },
    });
  };
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: submitEndpoint,
      data: inputs,
    })
      .then(() => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
    if (onFormSubmitted) {
      onFormSubmitted();
    }
  };

  return (
    <Root data-testid={ContactForm.name} onSubmit={handleOnSubmit} {...rest}>
      <InputWrapper $hasSubmitted={status.submitted}>
        <LabelledInput
          label="Your email:"
          name="email"
          type="email"
          id="email"
          required={true}
          onChange={handleOnChange}
          defaultValue={inputs.email}
          data-lpignore={true}
          data-testid={`${ContactForm.name}Email`}
        />
        <LabelledTextArea
          label="Your message"
          name="message"
          id="message"
          required={true}
          onChange={handleOnChange}
          defaultValue={inputs.message}
          data-testid={`${ContactForm.name}Message`}
        />
        <Button type="submit" data-testid={`${ContactForm.name}Submit`}>
          {!status.submitting
            ? !status.submitted
              ? "Send"
              : "Sent"
            : "Sending..."}
        </Button>
        {status.info.error && (
          <>
            <Spacer />
            <ErrorText>Error: {status.info.msg}</ErrorText>
          </>
        )}
      </InputWrapper>
      {!status.info.error && status.info.msg && (
        <SubmittedMessage align="center" fontSize="large">
          {status.info.msg}
        </SubmittedMessage>
      )}
    </Root>
  );
}
