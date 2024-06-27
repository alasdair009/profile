import { HTMLAttributes } from "react";

export type BaseSelectProps = {
  isInvalid?: boolean;
} & HTMLAttributes<HTMLSelectElement>;
