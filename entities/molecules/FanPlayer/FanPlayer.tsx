import styles from "./FanPlayer.module.css";
import { HTMLAttributes } from "react";
import { Audio } from "@/entities";

/**
 * Animated fan that can play a deep turbine noise.
 */
export function FanPlayer({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={styles.root}
      data-testid={FanPlayer.name}
      data-chromatic="ignore"
      {...rest}
    >
      <Audio
        src={
          "https://cdn.pixabay.com/download/audio/2022/03/09/audio_03be2a739e.mp3?filename=an-oscillating-fan-23785.mp3"
        }
        autoPlay={true}
      />
    </div>
  );
}
