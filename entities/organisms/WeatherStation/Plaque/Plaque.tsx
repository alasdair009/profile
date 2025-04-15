import { HTMLAttributes } from "react";
import styles from "./Plaque.module.scss";

type PlaqueProps = {
  windAngle?: string;
  windStrength?: number;
  rain?: number;
  pressure?: number;
  sunAngle?: number;
  cloudCover?: number;
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
  cloudCover,
  lastUpdated,
  isPending,
  className,
  ...rest
}: PlaqueProps) {
  return (
    <article
      className={`${styles.root} ${isPending ? styles.pending : ""} ${className}`}
      data-testid={Plaque.name}
      {...rest}
    >
      <dl className={styles.dl}>
        <dt className={styles.dt}>Rain:</dt>
        <dd className={styles.dd}>
          {rain}
          <sub>mm</sub>
        </dd>
        <dt className={styles.dt}>Wind:</dt>
        <dd className={styles.dd}>
          {windStrength}
          <sub>kph</sub>&nbsp;({windAngle})
        </dd>
        <dt className={styles.dt}>Pressure:</dt>
        <dd className={styles.dd}>
          {pressure}
          <sub>mbar</sub>
        </dd>
        <dt className={styles.dt}>Sun angle:</dt>
        <dd className={styles.dd}>
          {sunAngle}
          <sub>&deg;</sub>
        </dd>
        <dt className={styles.dt}>Cloud cover:</dt>
        <dd className={styles.dd}>{cloudCover}%</dd>
        <dt className={styles.dt}>Last updated:</dt>
        {lastUpdated ? (
          <dd className={styles.dd}>
            {lastUpdated.toLocaleString("en-GB", timeFormat)}
          </dd>
        ) : (
          <dd className={styles.dd}>-</dd>
        )}
      </dl>
    </article>
  );
}
