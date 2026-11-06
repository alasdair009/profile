import { Property } from "csstype";
import type { ImageProps, StaticImageData } from "next/image";
import { HTMLAttributes, ReactNode } from "react";

export type ContentPlateProps = {
  orientation?: "left" | "right";
  backgroundCss?: Property.Background;
  backgroundImage?: StaticImageData;
  backgroundImageAlt?: string;
  foregroundContent?: ReactNode;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export type ContentPlateImageProps = {
  foregroundImage: StaticImageData;
  foregroundImageAlt: string;
  foregroundAnimate?: boolean;
  foregroundImageLoading?: ImageProps["loading"];
} & HTMLAttributes<HTMLDivElement>;

export type ContentPlateIFrameProps = {
  embedUrl: string;
  placeholderImage?: StaticImageData;
  placeholderAlt?: string;
} & HTMLAttributes<HTMLDivElement>;

export type ContentPlateDitherVeilProps = {} & HTMLAttributes<HTMLDivElement>;
