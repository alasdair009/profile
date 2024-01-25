import { HTMLAttributes } from "react";
import { Background, Inner, Root, Strike } from "./styles";
import backgroundImage from "./assets/background.jpg";
import strikeImage from "./assets/lightining.png";

export function Lightning({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <Root>
      <Inner>
        <Background src={backgroundImage} alt={"Park background"} />
        <Strike src={strikeImage} alt={"Rain"} layout={"cover"} />
      </Inner>
    </Root>
  );
}
