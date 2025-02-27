import { Lig, Root } from "./styles";
import { CSSProperties } from "react";
import { colors } from "@/entities";

type ThermometerProps = {
  temperature: number;
};

const MIN_TEMP = -20;
const MAX_TEMP = 50;
const negativeScaleTotal = 0 - MIN_TEMP;

const getTempPercentage = (temperature: number) => {
  return Math.round(
    ((temperature + negativeScaleTotal) / (MAX_TEMP + negativeScaleTotal)) * 100
  );
};

export function Thermometer({ temperature }: ThermometerProps) {
  const tempPercentage = getTempPercentage(temperature);
  return (
    <Root
      data-testid={Thermometer.name}
      data-content={`${temperature}C`}
      style={
        {
          "--color": temperature < 0 ? colors.blueSea : colors.redHeat,
          "--temperature": tempPercentage,
        } as CSSProperties
      }
    >
      <Lig
        min={MIN_TEMP}
        max={MAX_TEMP}
        low={0}
        high={30}
        value={tempPercentage}
      />
    </Root>
  );
}
