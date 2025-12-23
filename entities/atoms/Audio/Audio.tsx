import styles from "./Audio.module.css";
import { HTMLAttributes } from "react";

type AudioProps = {
  /**
   * Url or path to the source.
   */
  src: string;
  /**
   * Display the controls UI.
   */
  controls?: boolean;
  /**
   * Autoplay on load (note this has browser restrictions).
   */
  autoPlay?: boolean;
  /**
   * Repeat the audio after it finishes.
   */
  loop?: boolean;
} & HTMLAttributes<HTMLAudioElement>;

/**
 * Play a local or external audio file.
 */
export function Audio({
  src,
  controls = true,
  autoPlay = true,
  loop = true,
  ...rest
}: AudioProps) {
  return (
    <audio
      className={styles.root}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      data-testid={Audio.name}
      {...rest}
    >
      <source src={src} type="audio/mpeg" data-testid={`${Audio.name}Source`} />
    </audio>
  );
}
