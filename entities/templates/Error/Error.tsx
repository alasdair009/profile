import { HTMLAttributes } from "react";
import {
  BackgroundFire,
  ErrorTextMask,
  Inner,
  Root,
  MaskWrapper,
} from "./styles";
import { colors, Heading, Link, Paragraph, Spacer } from "@/entities";
import { rgba } from "polished";

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
    <Root data-testid={Error.name} {...rest}>
      <Spacer multiplier={4} />
      <Heading align="center">{errorHeading}</Heading>
      <Inner>
        <BackgroundFire
          baseColor={colors.greenGrass}
          duration={3}
          numberOfParticles={200}
        />
        <MaskWrapper>
          <ErrorTextMask
            text={`${errorCode}`}
            maskFill={rgba(colors.blackEvil, 0.7)}
          />
        </MaskWrapper>
      </Inner>
      <Paragraph align="center">{errorText}</Paragraph>
      <Spacer />
      {children}
      <Spacer multiplier={8} />
    </Root>
  );
}
