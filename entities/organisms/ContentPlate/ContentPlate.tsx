import {
  Root,
  Inner,
  BackgroundWrapper,
  ForegroundWrapper,
  CopyBox,
  ForegroundImage,
} from "./styles";
import Image from "next/image";
import { ContentPlateProps } from "./ContentPlate.types";

export function ContentPlate({
  orientation = "left",
  backgroundCss = "none",
  backgroundImage,
  backgroundImageAlt,
  foregroundImage,
  foregroundImageAlt,
  children,
  ...rest
}: ContentPlateProps) {
  return (
    <Root {...rest} data-testid={ContentPlate.name}>
      {((backgroundImage && backgroundImageAlt) || backgroundCss) && (
        <BackgroundWrapper $backgroundCss={backgroundCss}>
          {backgroundImage && backgroundImageAlt && (
            <Image src={backgroundImage} alt={backgroundImageAlt} />
          )}
        </BackgroundWrapper>
      )}
      <Inner $orientation={orientation}>
        <CopyBox>{children}</CopyBox>
        {foregroundImage && foregroundImageAlt && (
          <ForegroundWrapper>
            <ForegroundImage src={foregroundImage} alt={foregroundImageAlt} />
          </ForegroundWrapper>
        )}
      </Inner>
    </Root>
  );
}
