import { HTMLAttributes } from "react";
import { colors } from "../../design-tokens/colors";
import { Heading } from "../../atoms/Heading";
import { Paragraph } from "../../atoms/Paragraph";
import { fontSizes } from "@/entities/design-tokens/typography";
import { MaskWrapper, Root, SplashCopy } from "./styles";

type SplashProps = {} & HTMLAttributes<HTMLDivElement>;

export function Splash({ ...rest }: SplashProps) {
  return (
    <Root {...rest}>
      <SplashCopy>
        <Heading
          level="h2"
          as="h1"
          color={colors.greenGrass}
          style={{ fontSize: fontSizes.xxlarge.rem }}
        >
          Alasdair Macrae
        </Heading>
        <Paragraph align="center" fontSize="large">
          <em>Web Developer and Trampolinist</em>
        </Paragraph>
      </SplashCopy>
      <MaskWrapper></MaskWrapper>
    </Root>
  );
}
