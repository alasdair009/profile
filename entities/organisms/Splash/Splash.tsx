import { HTMLAttributes } from "react";
import {
  Copy,
  CopyParagraph,
  FeetSection,
  HeadSection,
  Inner,
  Root,
} from "./styles";
import {rem} from "polished";
import {colors, globalContentMaxWidth, globalDecorationMaxWidth, Link} from "@/entities";

export function Splash({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <Root style={{ minHeight: "100vh", alignItems: "cente",
      display: "flex",
      justifyContent: "center",
      margin: "0 auto",
      maxWidth: rem(globalDecorationMaxWidth),
      position: "relative",
      width: "100%" }} {...rest}>
      <Inner style={{
        display: "flex",
        height: "100%",
        margin: "0 auto",
        maxWidth: rem(globalContentMaxWidth),
        width: "100%"
      }}>
        <FeetSection style={{background: colors.blackEvil,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative"}}>
          <Copy>
            <CopyParagraph color={colors.whiteGhost} fontSize="large">
              Hello I am Ali, a front-end web developer and trampolinist!
            </CopyParagraph>
            <CopyParagraph fontSize="large">
              Always seeking adventures!
            </CopyParagraph>
            <Link variant="large" href="/portfolio">
              Hire me now!
            </Link>
          </Copy>
        </FeetSection>
        <HeadSection />
      </Inner>
    </Root>
  );
}
