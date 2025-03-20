import { HTMLAttributes } from "react";

export type DateInputType = "date" | "datetime-local";

export type BaseDateProps = {
  type?: DateInputType;
  isInvalid?: boolean;
  min?: Date;
  max?: Date;
} & HTMLAttributes<HTMLInputElement>;
