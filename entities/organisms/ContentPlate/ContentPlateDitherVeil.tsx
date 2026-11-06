import { ContentPlateDitherVeilProps } from "./ContentPlate.types";
import styles from "./ContentPlate.module.css";
import { DitherVeil } from "../../molecules/DitherVeil";

/**
 * Render an IFrame inside a ContentPlate
 */
export function ContentPlateDitherVeil({
  ...rest
}: ContentPlateDitherVeilProps) {
  return (
    <div
      className={styles.ditherVeilWrapper}
      data-testid={ContentPlateDitherVeil.displayName}
      {...rest}
    >
      <DitherVeil className={styles.ditherVeil} />
    </div>
  );
}
ContentPlateDitherVeil.displayName = "ContentPlateDitherVeil";
