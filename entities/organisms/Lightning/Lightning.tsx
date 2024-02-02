import { HTMLAttributes } from "react";
import { Background, Content, Inner, Root, Strike } from "./styles";
import backgroundImage from "./assets/background.jpg";
import strikeImage from "./assets/lightining.png";
import { Rain } from "./Rain";

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
  return (
    <Root {...rest}>
      <Inner $rainSpeedDuration={rainSpeedDuration}>
        <Background
          src={backgroundImage}
          alt={"Park background"}
          $frequency={frequency}
        />
        <Rain />
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

Lightning.Rain = Rain;
