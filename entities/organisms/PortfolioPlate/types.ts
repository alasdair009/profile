import { ContentPlateProps } from "@/entities/organisms/ContentPlate/ContentPlate.types";
import { LinkProps } from "@/entities/atoms/Link/types";
import { HTMLAttributes } from "react";

export type PortfolioPlateProps = {
  /**
   * Props applied to the ContentPlate
   */
  contentPlateProps: Omit<ContentPlateProps, "children">;
  /**
   * Heading for the piece
   */
  heading: string;
  /**
   * Url to the piece
   */
  url?: LinkProps["href"];
} & HTMLAttributes<HTMLDivElement>;
