import { HTMLAttributes } from "react";
import styled from "styled-components";
import { globalContentMaxWidth } from "@/entities/design-tokens/dimensions";
import { rem } from "polished";
import { colors, Header, Heading, Paragraph } from "@/entities";
import maskImg from "./mask.svg";
import { fontSizes } from "@/entities/design-tokens/typography";

type SplashProps = {} & HTMLAttributes<HTMLDivElement>;

const Root = styled.section`
  align-items: center;
  display: flex;
  height: calc(100vh - ${Header.height});
  justify-content: center;
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
  position: relative;
  width: 100%;
`;

const SplashCopy = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;
`;
const MaskWrapper = styled.div`
  background: white;
  height: 100%;
  -webkit-mask-image: url(${maskImg.src});
  mask-image: url(${maskImg.src});
  -webkit-mask-position: center;
  mask-position: center;
  overflow: hidden;
  width: 50%;
`;

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
