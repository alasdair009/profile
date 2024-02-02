import {
  Root,
  Inner,
  BackgroundWrapper,
  ForegroundWrapper,
  CopyBox,
  ForegroundImage,
  FrameBoxWrapper,
} from "./styles";
import Image from "next/image";
import { ContentPlateProps } from "./ContentPlate.types";
import { IFrame } from "@/entities";

export function ContentPlate({
  orientation = "left",
  backgroundCss = "none",
  backgroundImage,
  backgroundImageAlt,
  embedUrl,
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
        {embedUrl && (
          <FrameBoxWrapper>
            <IFrame src={embedUrl} />
          </FrameBoxWrapper>
        )}
        {foregroundImage && foregroundImageAlt && (
          <ForegroundWrapper>
            <ForegroundImage src={foregroundImage} alt={foregroundImageAlt} />
          </ForegroundWrapper>
        )}
      </Inner>
    </Root>
  );
}
