import { HTMLAttributes } from "react";
import trampolineImage from "./trampoline.svg";
import { Heading, Spacer } from "@/entities";
import styles from "./Trampoline.module.css";
import Image from "next/image";

export function Trampoline({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={styles.root} data-testid={Trampoline.name} {...rest}>
      <Spacer multiplier={4} />
      <Heading level="h2" data-testid={`${Trampoline.name}Heading2`}>
        Trampoline
      </Heading>
      <Heading level="h3" data-testid={`${Trampoline.name}Heading3`}>
        Gymnast & Coach
      </Heading>
      <Spacer multiplier={4} />
      <Image
        className={styles.trampolineImage}
        src={trampolineImage}
        alt="Eurotramp trampoline"
      />
      <Spacer multiplier={4} />
    </div>
  );
}
