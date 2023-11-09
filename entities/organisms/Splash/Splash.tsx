import { HTMLAttributes } from "react";
import { colors } from "../../design-tokens/colors";
import { Paragraph } from "../../atoms/Paragraph";
import {
  Copy,
  CopyParagraph,
  FeetSection,
  HeadSection,
  Inner,
  Root,
} from "./styles";
import { Link } from "../../atoms/Link";

type SplashProps = {} & HTMLAttributes<HTMLDivElement>;

export function Splash({ ...rest }: SplashProps) {
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
        <HeadSection></HeadSection>
      </Inner>
    </Root>
  );
}
