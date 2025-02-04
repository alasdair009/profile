import { CSSProperties, HTMLAttributes } from "react";
import { EffectBox as Root } from "../styles";
import { rem, rgba } from "polished";
import { LCG, lcgNextRand, makeLCG } from "@/lib/random";

type EffectBoxProps = {
  particlesPerPlate: number;
  index: number;
} & HTMLAttributes<HTMLDivElement>;

const randomPosition = (lcg: LCG) => {
  return (Math.floor(lcgNextRand(lcg) * 100) - 50) * 2;
};

export const generateParticles = (
  size: number,
  numberOfParticles: number
): CSSProperties["boxShadow"] => {
  const particleLCG = makeLCG();
  let particleString: CSSProperties["boxShadow"] = "";
  for (let i = 0; i < numberOfParticles; i++) {
    particleString += `${randomPosition(particleLCG)}vw ${randomPosition(particleLCG)}vh ${rem(size * 5)} ${rem(size * 3)} ${rgba(255, 255, 255, 0.5)}${i < numberOfParticles - 1 ? "," : ""} `;
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
