import { HTMLAttributes } from "react";
import { Root, TrampolineImage } from "./styles";
import trampolineImage from "./trampoline.svg";
import { Heading, Spacer } from "@/entities";

export function Trampoline({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <Root data-testid={Trampoline.name} {...rest}>
      <Spacer multiplier={4} />
      <Heading level="h2">Trampoline</Heading>
      <Heading level="h3">Gymnast & Coach</Heading>
      <Spacer multiplier={4} />
      <TrampolineImage src={trampolineImage} alt="Eurotramp trampoline" />
      <Spacer multiplier={4} />
    </Root>
  );
}
