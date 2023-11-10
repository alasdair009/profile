import { Root } from "./styles";
import { HTMLAttributes } from "react";

type OrbProps = {
  numberOfParticles?: number;
} & HTMLAttributes<HTMLDivElement>;
export function Orb({ numberOfParticles = 300, ...rest }: OrbProps) {
  const particles = [];
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(<span key={`${numberOfParticles}particle${i}`}></span>);
  }

  return (
    <Root $numberOfParticles={numberOfParticles} {...rest}>
      {particles}
    </Root>
  );
}
