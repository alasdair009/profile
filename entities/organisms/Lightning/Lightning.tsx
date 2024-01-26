import { HTMLAttributes } from "react";
import { Background, Content, Inner, Root, Strike } from "./styles";
import backgroundImage from "./assets/background.jpg";
import strikeImage from "./assets/lightining.png";
import { getImageProps } from "next/image";
import rainImage from "./assets/rain.png";
import { getBackgroundImage } from "@/lib/getBackgroundImage";

type LightningProps = {
  frequency?: number;
  rainSpeedDuration?: number;
} & HTMLAttributes<HTMLDivElement>;
export function Lightning({
  frequency = 2,
  rainSpeedDuration = 0.3,
  children,
  ...rest
}: LightningProps) {
  const {
    props: { src: rainImageSrc, srcSet: rainImageSourceSet },
  } = getImageProps({ alt: "", height: 320, width: 480, src: rainImage.src });
  return (
    <Root {...rest}>
      <Inner
        $rainSpeedDuration={rainSpeedDuration}
        style={{ backgroundImage: getBackgroundImage(rainImageSourceSet) }}
      >
        <Background
          src={backgroundImage}
          alt={"Park background"}
          $frequency={frequency}
        />
        <Strike
          src={strikeImage}
          alt={"Rain"}
          layout={"cover"}
          $frequency={frequency}
        />
        <Content>{children}</Content>
      </Inner>
    </Root>
  );
}
