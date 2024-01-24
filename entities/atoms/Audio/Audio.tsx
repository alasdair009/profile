import { Root } from "./styles";
import { HTMLAttributes } from "react";

type AudioProps = {
  src: string;
  controls?: boolean;
  autoPlay?: boolean;
} & HTMLAttributes<HTMLAudioElement>;

export function Audio({
  src,
  controls = true,
  autoPlay = true,
  ...rest
}: AudioProps) {
  return (
    <Root controls={controls} autoPlay={autoPlay} {...rest}>
      <source src={src} type="audio/mpeg" />
    </Root>
  );
}
