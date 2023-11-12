import { HTMLAttributes } from "react";

export type TextInputType = "text" | "email" | "password";

export type BaseInputProps = {
  type: TextInputType;
} & HTMLAttributes<HTMLInputElement>;
