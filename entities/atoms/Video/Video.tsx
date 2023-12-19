import { Root } from "./styles";
import { HTMLAttributes, ReactNode } from "react";

type VideoProps = {
  loop?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  src: string;
} & HTMLAttributes<HTMLVideoElement>;
export function Video({
  src,
  loop = true,
  autoPlay = true,
  muted = true,
  ...rest
}: VideoProps) {
  return (
    <Root
      src={src}
      loop={loop}
      autoPlay={autoPlay}
      playsInline={autoPlay}
      muted={muted}
      {...rest}
    />
  );
}
