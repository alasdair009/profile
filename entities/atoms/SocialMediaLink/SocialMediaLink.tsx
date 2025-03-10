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
    case "bluesky":
      return "https://bsky.app/profile/alasdair009.bsky.social";
    case "facebook":
      return "https://www.facebook.com/alasdair009";
    case "github":
      return "https://github.com/alasdair009";
    case "instagram":
      return "https://www.instagram.com/alasdair009";
    case "linkedin":
      return "https://www.linkedin.com/in/alasdairmacrae/";
    case "x":
      return "https://twitter.com/alasdair009";
    case "youtube":
      return "https://www.youtube.com/alasdair009";
  }
};

/**
 * Icon that links to the requested social media network.
 */
export function SocialMediaLink({
  variant,
  children,
  ...rest
}: SocialMediaProps) {
  return (
    <Root
      href={getSocialMediaUrl(variant)}
      target="_blank"
      rel="noopener"
      $variant={variant}
      data-testid={SocialMediaLink.name}
      {...rest}
    >
      {children}
    </Root>
  );
}
