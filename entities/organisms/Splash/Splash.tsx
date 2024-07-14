import { HTMLAttributes } from "react";
import {
  Copy,
  CopyParagraph,
  FeetSection,
  HeadSection,
  Inner,
  Root,
} from "./styles";
import { colors, Heading, Link } from "@/entities";

export function Splash({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <Root {...rest}>
      <Inner>
        <FeetSection>
          <Copy>
            <Heading>Ali Macrae</Heading>
            <CopyParagraph
              color={colors.whiteGhost}
              fontSize="large"
              textWrap="balance"
            >
              The gravity defying blend of web developer and trampolinist.
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
