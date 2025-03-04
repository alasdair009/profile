import { DD, DL, DT, Root } from "./styles";
import { HTMLAttributes } from "react";

type PlaqueProps = {
  windAngle?: string;
  windStrength?: number;
  rain?: number;
  pressure?: number;
  sunAngle?: number;
  lastUpdated?: Date;
  isPending: boolean;
} & HTMLAttributes<HTMLDivElement>;

const timeFormat: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
};

export function Plaque({
  windAngle,
  windStrength,
  rain,
  pressure,
  sunAngle,
  lastUpdated,
  isPending,
  ...rest
}: PlaqueProps) {
  return (
    <Root data-testid={Plaque.name} $isPending={isPending} {...rest}>
      <DL>
        <DT>Rain:</DT>
        <DD>
          {rain}
          <sub>mm</sub>
        </DD>
        <DT>Wind:</DT>
        <DD>
          {windStrength}
          <sub>kph</sub>&nbsp;({windAngle})
        </DD>
        <DT>Pressure:</DT>
        <DD>
          {pressure}
          <sub>mbar</sub>
        </DD>
        <DT>Sun angle:</DT>
        <DD>
          {sunAngle}
          <sub>&deg;</sub>
        </DD>
        <DT>Last updated:</DT>
        {lastUpdated ? (
          <DD>{lastUpdated.toLocaleString("en-GB", timeFormat)}</DD>
        ) : (
          <DD>-</DD>
        )}
      </DL>
    </Root>
  );
}
