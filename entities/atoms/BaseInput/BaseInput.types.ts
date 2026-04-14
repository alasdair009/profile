import { InputHTMLAttributes } from "react";

export type TextInputType = "text" | "email" | "password" | "number" | "tel";

export type BaseInputProps = {
  isInvalid?: boolean;
  type: TextInputType;
} & InputHTMLAttributes<HTMLInputElement>;
