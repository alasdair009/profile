import { HTMLAttributes } from "react";
import { Copy, CopyParagraph, FeetSection, HeadSection, Inner, Root } from "./styles";
import { colors, Heading, Link } from "@/entities";

export function Splash({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <Root itemScope={true} itemType="https://schema.org/Person" {...rest}>
      <Inner>
        <FeetSection>
          <Copy>
            <Heading>
              <span itemProp="givenName">Ali</span> Macrae
            </Heading>
            <CopyParagraph color={colors.whiteGhost} fontSize="large" textWrap="balance">
              The gravity defying blend of <span itemProp="jobTitle">web developer</span> and trampolinist.
            </CopyParagraph>
            <CopyParagraph fontSize="large">Always seeking adventures!</CopyParagraph>
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
