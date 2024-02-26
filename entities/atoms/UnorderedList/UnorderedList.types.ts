import { HTMLAttributes, ReactNode } from "react";

export type UnorderedListProps = {
  /**
   * Horizontal alignment of the items.
   */
  align?: "left" | "right" | "center";
  /**
   * List entries.
   */
  children: ReactNode | ReactNode[];
} & HTMLAttributes<HTMLUListElement>;
