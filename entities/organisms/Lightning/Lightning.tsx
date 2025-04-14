import { CSSProperties, HTMLAttributes } from "react";
import backgroundImage from "./assets/background.webp";
import strikeImage from "./assets/lightining.png";
import { Rain } from "../../atoms/Rain";
import styles from "./Lightning.module.scss";
import Image from "next/image";

type LightningProps = {
  frequency?: number;
} & HTMLAttributes<HTMLDivElement>;
export function Lightning({
  frequency = 2,
  children,
  ...rest
}: LightningProps) {
  return (
    <section className={styles.root} data-testid={Lightning.name} {...rest}>
      <div className={styles.inner}>
        <Image
          className={styles.background}
          src={backgroundImage}
          alt={"Park background"}
          style={
            {
              "--frequency": `${frequency}s`,
            } as CSSProperties
          }
        />
        <Rain />
        <Image
          className={styles.strike}
          src={strikeImage}
          alt={"Rain"}
          fill={true}
          style={
            {
              "--frequency": `${frequency}s`,
            } as CSSProperties
          }
        />
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
}

Lightning.Rain = Rain;
