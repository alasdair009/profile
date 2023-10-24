import {HTMLAttributes} from "react";
import styled from "styled-components";
import {globalContentMaxWidth} from "@/entities/design-tokens/dimensions";
import {rem} from "polished";
import {Header, Heading, Paragraph} from "@/entities";

type SplashProps = {
} & HTMLAttributes<HTMLDivElement>;

const Root = styled.section`
  height: calc(100vh - ${Header.height});
  margin: 0 auto;
  max-width: ${rem(globalContentMaxWidth)};
  position: relative;
  width: 100%;
`;

const SplashCopy = styled.div`
  left: 50%;
  max-width: 100%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export function Splash({...rest}: SplashProps) {
    return <Root {...rest}>
        <SplashCopy>
            <Heading>Alasdair Macrae</Heading>
            <Paragraph align="center" fontSize="large"><em>Web Developer and Trampolinist</em></Paragraph>
        </SplashCopy>
    </Root>
}