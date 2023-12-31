import { Root } from "./styles";
import { HTMLAttributes } from "react";
import { StaticImageData } from "next/image";

type VideoProps = {
  loop?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  mp4Src?: string;
  webmSrc: string;
  poster: StaticImageData;
} & HTMLAttributes<HTMLVideoElement>;
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
      autoPlay={autoPlay}
      playsInline={autoPlay}
      muted={muted}
      poster={poster.src}
      {...rest}
    >
      <source type="video/webm" src={webmSrc} />
      {mp4Src && <source type="video/mp4" src={mp4Src} />}
    </Root>
  );
}
