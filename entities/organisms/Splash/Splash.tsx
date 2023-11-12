import { HTMLAttributes } from "react";
import {
  Copy,
  CopyParagraph,
  FeetSection,
  HeadSection,
  Inner,
  Root,
} from "./styles";
import { colors, Link } from "@/entities";

export function Splash({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <Root {...rest}>
      <Inner>
        <FeetSection>
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
