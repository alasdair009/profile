import { Root } from "./styles";
import { HTMLAttributes } from "react";

type AudioProps = {
  src: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
} & HTMLAttributes<HTMLAudioElement>;

export function Audio({
  src,
  controls = true,
  autoPlay = true,
    loop = true,
  ...rest
}: AudioProps) {
  return (
    <Root controls={controls} autoPlay={autoPlay} loop={loop} {...rest}>
      <source src={src} type="audio/mpeg" />
    </Root>
  );
}
