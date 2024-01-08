import { HTMLAttributes, ReactNode } from "react";

export type UnorderedListProps = {
  align?: "left" | "right" | "center";
  children: ReactNode[];
} & HTMLAttributes<HTMLUListElement>;
