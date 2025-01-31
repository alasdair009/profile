import { CSSProperties, HTMLAttributes } from "react";
import { EffectBox as Root } from "../styles";
import { rem, rgba } from "polished";

type EffectBoxProps = {
  particlesPerPlate: number;
  index: number;
} & HTMLAttributes<HTMLDivElement>;

const randomPosition = () => {
  return (Math.floor(Math.random() * 100) - 50) * 2;
};

export const generateParticles = (size: number, numberOfParticles: number) => {
  let particleString = "";
  for (let i = 0; i < numberOfParticles; i++) {
    particleString += `${randomPosition()}vw ${randomPosition()}vh ${rem(size * 5)} ${rem(size * 3)} ${rgba(255, 255, 255, 0.5)}${i < numberOfParticles - 1 ? "," : ""} `;
  }
  return particleString;
};

export function EffectBox({
  particlesPerPlate,
  index,
  style,
  ...rest
}: EffectBoxProps) {
  return (
    <Root
      style={
        {
          "--index": index,
          "--shadows": generateParticles(index, particlesPerPlate),
        } as CSSProperties
      }
      data-chromatic="ignore"
      data-testid={EffectBox.name}
      {...rest}
    />
  );
}
