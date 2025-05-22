import { HTMLAttributes } from "react";
import {
  colors,
  Container,
  Fire,
  Heading,
  Paragraph,
  Spacer,
  TextMask,
} from "@/entities";
import { rgba } from "polished";
import styles from "./Error.module.scss";

type ErrorProps = {
  errorCode: 404 | 500;
  errorHeading: string;
  errorText: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * UI to display when the app experiences an error.
 */
export function Error({
  errorCode,
  errorHeading,
  errorText,
  children,
  ...rest
}: ErrorProps) {
  return (
    <Container className={styles.root} data-testid={Error.name} {...rest}>
      <Spacer multiplier={4} />
      <Heading align="center">{errorHeading}</Heading>
      <div className={styles.inner}>
        <Fire
          className={styles.backgroundFire}
          baseColor={colors.greenGrass}
          duration={3}
          numberOfParticles={200}
        />
        <div className={styles.maskWrapper}>
          <TextMask
            className={styles.errorTextMask}
            text={`${errorCode}`}
            maskFill={rgba(colors.blackEvil, 0.7)}
          />
        </div>
      </div>
      <Paragraph align="center" data-testid={`${Error.name}Text`}>
        {errorText}
      </Paragraph>
      <Spacer />
      {children}
      <Spacer multiplier={8} />
    </Container>
  );
}
