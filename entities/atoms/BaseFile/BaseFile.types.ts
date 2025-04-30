import { HTMLAttributes } from "react";

export type BaseFileProps = {
  isInvalid?: boolean;
} & HTMLAttributes<HTMLInputElement>;
