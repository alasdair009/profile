import styles from "./Barometer.module.css";

type BarometerProps = {
  pressure: number;
};

export function Barometer({ pressure }: BarometerProps) {
  return <meter className={styles.root} />;
}
