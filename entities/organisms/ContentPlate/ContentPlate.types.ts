import { Property } from "csstype";
import { StaticImageData } from "next/image";
import { HTMLAttributes, ReactNode } from "react";

export type ContentPlateProps = {
  orientation?: "left" | "right";
  backgroundCss?: Property.Background;
  backgroundImage?: StaticImageData;
  backgroundImageAlt?: string;
  foregroundImage?: StaticImageData;
  foregroundImageAlt?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
