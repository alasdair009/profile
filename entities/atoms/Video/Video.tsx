"use client";
import { Root } from "./styles";
import { HTMLAttributes } from "react";
import { StaticImageData } from "next/image";
import { prefersReducedMotion } from "@/entities";

type VideoProps = {
  /**
   * Repeat the video after it finishes.
   */
  loop?: boolean;
  /**
   * Autoplay on load (note this has browser limitations).
   */
  autoPlay?: boolean;
  /**
   * Mute the video.
   */
  muted?: boolean;
  /**
   * Url or path to the mp4 file (needed for iOS).
   */
  mp4Src?: string;
  /**
   * Url or path to the webm file.
   */
  webmSrc: string;
  /**
   * Graphic to display when the video is not available.
   */
  poster: StaticImageData;
} & HTMLAttributes<HTMLVideoElement>;

/**
 * Play a video within the interface.
 */
export function Video({
  mp4Src,
  webmSrc,
  loop = true,
  autoPlay = true,
  muted = true,
  poster,
  ...rest
}: VideoProps) {
  return (
    <Root
      loop={loop}
      autoPlay={!prefersReducedMotion}
      playsInline={autoPlay}
      muted={muted}
      poster={poster.src}
      data-testid={Video.name}
      {...rest}
    >
      <source type="video/webm" src={webmSrc} />
      {mp4Src && <source type="video/mp4" src={mp4Src} />}
    </Root>
  );
}
