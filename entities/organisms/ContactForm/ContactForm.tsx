"use client";
import { Root } from "./styles";
import { FormEvent, HTMLAttributes, useState } from "react";
import {
  Button,
  ErrorText,
  LabelledInput,
  LabelledTextArea,
  Paragraph,
} from "@/entities";
import axios from "axios";

type ContactFormProps = {} & HTMLAttributes<HTMLFormElement>;

/**
 * Standard contact form
 */
export function ContactForm({ ...rest }: ContactFormProps) {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: "" },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok: boolean, msg: string) => {
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
      url: "https://formspree.io/f/myyrgerj",
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
  };
  return (
    <Root onSubmit={handleOnSubmit} {...rest}>
      <LabelledInput
        label="Your email:"
        name="email"
        type="email"
        id="email"
        required={true}
        onChange={handleOnChange}
        defaultValue={inputs.email}
        data-lpignore={true}
      />
      <LabelledTextArea
        label="Your message"
        name="message"
        id="message"
        required={true}
        onChange={handleOnChange}
        defaultValue={inputs.message}
      />
      <Button type="submit">
        {!status.submitting
          ? !status.submitted
            ? "Send"
            : "Sent"
          : "Sending..."}
      </Button>
      {status.info.error && <ErrorText>Error: {status.info.msg}</ErrorText>}
      {!status.info.error && status.info.msg && (
        <Paragraph>{status.info.msg}</Paragraph>
      )}
    </Root>
  );
}
