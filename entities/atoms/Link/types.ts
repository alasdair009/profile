import { HTMLAttributes, ReactNode } from "react";

export type LinkVariant = "large" | "regular";

export type LinkProps = {
  /**
   * Visual variant of the link.
   */
  variant?: LinkVariant;
  /**
   * Content of the link.
   */
  children?: ReactNode;
  /**
   * Url or path to link to.
   */
  href: string;
  /**
   * Display an iframe preview of the href
   */
  hoverFrame?: boolean;
  /**
   * Number of lines the text is restricted to.
   */
  lines?: number;
} & HTMLAttributes<HTMLAnchorElement>;
