import { Property } from "csstype";
import type { ImageProps, StaticImageData } from "next/image";
import { HTMLAttributes, ReactNode } from "react";

export type ContentPlateProps = {
  orientation?: "left" | "right";
  backgroundCss?: Property.Background;
  backgroundImage?: StaticImageData;
  backgroundImageAlt?: string;
  foregroundImage?: StaticImageData;
  foregroundImageAlt?: string;
  foregroundAnimate?: boolean;
  foregroundImageLoading?: ImageProps["loading"];
  embedUrl?: string;
  flameColor?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
