import { CSSProperties, HTMLAttributes } from "react";
import { colors } from "@/entities";
import styles from "./Thermometer.module.scss";

type ThermometerProps = {
  temperature: number;
} & HTMLAttributes<HTMLDivElement>;

const MIN_TEMP = -20;
const MAX_TEMP = 50;

export function Thermometer({
  temperature,
  className,
  ...rest
}: ThermometerProps) {
  return (
    <div
      className={`${styles.root} ${className}`}
      data-testid={Thermometer.name}
      data-content={`${temperature}C`}
      style={
        {
          "--color": temperature < 30 ? colors.blueSea : colors.redHeat,
          "--temperature": temperature,
        } as CSSProperties
      }
      {...rest}
    >
      <meter
        className={styles.lig}
        min={MIN_TEMP}
        max={MAX_TEMP}
        low={0}
        high={30}
        value={temperature}
      />
    </div>
  );
}
