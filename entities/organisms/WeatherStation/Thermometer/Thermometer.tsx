import { Lig, Root } from "./styles";
import { CSSProperties } from "react";
import { colors } from "@/entities";

type ThermometerProps = {
  temperature: number;
};

const MIN_TEMP = -20;
const MAX_TEMP = 50;

export function Thermometer({ temperature }: ThermometerProps) {
  return (
    <Root
      data-testid={Thermometer.name}
      data-content={`${temperature}C`}
      style={
        {
          "--color": temperature < 30 ? colors.blueSea : colors.redHeat,
          "--temperature": temperature,
        } as CSSProperties
      }
    >
      <Lig
        min={MIN_TEMP}
        max={MAX_TEMP}
        low={0}
        high={30}
        value={temperature}
      />
    </Root>
  );
}
