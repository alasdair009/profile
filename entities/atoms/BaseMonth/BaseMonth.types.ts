import { InputHTMLAttributes } from "react";

export type BaseMonthProps = {
  isInvalid?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;
