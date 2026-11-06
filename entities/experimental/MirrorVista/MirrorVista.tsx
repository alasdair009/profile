import { CSSProperties, HTMLAttributes } from "react";
import styles from "./MirrorVista.module.css";
import Image from "next/image";
import jagexVista from "./jagex-vista.jpg";
import fish from "./fish.svg";
import { Paragraph } from "../../atoms/Paragraph";
import { colors } from "../../../styles/tokens";

type MirrorVistaProps = {
  hasFish?: boolean;
  waterBlur?: number;
  waterLuminosity?: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Uses the css property box reflect to create a scene where the primary graphic is reflected to create the illusion of a reflection on a pond.
 * This will currently only work in webkit browsers.
 */
export function MirrorVista({
  hasFish = true,
  waterBlur = 1,
  waterLuminosity,
  className = "",
  ...rest
}: MirrorVistaProps) {
  const graphicHeight = 400;
  return (
    <div
      className={`${styles.root} ${className}`}
      data-testid={MirrorVista.displayName}
      {...rest}
    >
      <div
        className={styles.inner}
        style={
          {
            "--reflection-height": graphicHeight * 2,
            "--water-blur": waterBlur,
            "--water-luminosity": waterLuminosity,
          } as CSSProperties
        }
      >
        <Paragraph
          align="center"
          color={colors.redHeat}
          className={styles.canIUse}
        >
          Note this will only work in webkit browsers.
        </Paragraph>
        <Image
          className={styles.vista}
          src={jagexVista}
          alt=""
          height={graphicHeight}
        />
        {hasFish && (
          <>
            <Image
              className={styles.fish}
              src={fish}
              alt=""
              aria-hidden="true"
              data-testid={`${MirrorVista.displayName}Fish`}
            />
            <Image
              className={`${styles.fish} ${styles.fishTwo}`}
              src={fish}
              alt=""
              aria-hidden="true"
              data-testid={`${MirrorVista.displayName}Fish`}
            />
            <Image
              className={`${styles.fish} ${styles.fishThree}`}
              src={fish}
              alt=""
              aria-hidden="true"
              data-testid={`${MirrorVista.displayName}Fish`}
            />
            <Image
              className={`${styles.fish} ${styles.fishFour}`}
              src={fish}
              alt=""
              aria-hidden="true"
              data-testid={`${MirrorVista.displayName}Fish`}
            />
          </>
        )}
      </div>
    </div>
  );
}
MirrorVista.displayName = "MirrorVista";
