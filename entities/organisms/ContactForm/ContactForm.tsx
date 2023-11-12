"use client";
import { Root } from "./styles";
import { HTMLAttributes } from "react";
import { Button, LabelledInput, LabelledTextArea } from "@/entities";

type ContactFormProps = {} & HTMLAttributes<HTMLFormElement>;

/**
 * Standard contact form
 */
export function ContactForm({ ...rest }: ContactFormProps) {
  return (
    <Root {...rest}>
      <LabelledInput label="Your email:" type="email" />
      <LabelledTextArea label="Your message" />
      <Button onClick={() => alert("WIP")}>Send</Button>
    </Root>
  );
}
