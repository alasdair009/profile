import { HTMLAttributes, ReactNode } from "react";

export type LinkVariant = "large" | "regular";

export type LinkProps = {
  /**
   *
   */
  variant?: LinkVariant;
  /**
   * Content of the link.
   */
  children: ReactNode;
  /**
   * Url or path to link to.
   */
  href: string;
} & HTMLAttributes<HTMLAnchorElement>;
