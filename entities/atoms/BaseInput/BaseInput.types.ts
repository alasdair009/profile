import { HTMLAttributes } from "react";

export type TextInputType = "text" | "email" | "password";

export type BaseInputProps = {
  isInvalid?: boolean;
  type: TextInputType;
} & HTMLAttributes<HTMLInputElement>;
