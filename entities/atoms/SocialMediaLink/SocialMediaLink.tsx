import { Root } from "./styles";
import { HTMLAttributes } from "react";
import { SocialMediaLinkVariant } from "./SocialMediaLinks.types";

type SocialMediaProps = {
  /**
   * Network to link to.
   */
  variant: SocialMediaLinkVariant;
} & HTMLAttributes<HTMLAnchorElement>;

const getSocialMediaUrl = (variant: SocialMediaLinkVariant) => {
  switch (variant) {
    case "github":
      return "https://github.com/alasdair009";
    case "linkedin":
      return "https://www.linkedin.com/in/alasdairmacrae/";
    case "x":
      return "https://twitter.com/alasdair009";
  }
};

/**
 * Icon that links to the requested social media network.
 */
export function SocialMediaLink({ variant, children, ...rest }: SocialMediaProps) {
  return (
    <Root href={getSocialMediaUrl(variant)} target="_blank" rel="noopener" $variant={variant} {...rest}>
      {children}
    </Root>
  );
}
