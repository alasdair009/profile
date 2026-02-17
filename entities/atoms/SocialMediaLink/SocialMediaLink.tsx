import { HTMLAttributes } from "react";
import { SocialMediaLinkVariant } from "./SocialMediaLinks.types";
import Link from "next/link";
import styles from "./SocialMediaLink.module.css";
import blueskyIcon from "@/entities/atoms/SocialMediaLink/assets/bluesky.svg";
import facebookIcon from "@/entities/atoms/SocialMediaLink/assets/facebook.svg";
import gitHubIcon from "@/entities/atoms/SocialMediaLink/assets/github.svg";
import instagramIcon from "@/entities/atoms/SocialMediaLink/assets/instagram.svg";
import linkedInIcon from "@/entities/atoms/SocialMediaLink/assets/linkedin.svg";
import xIcon from "@/entities/atoms/SocialMediaLink/assets/x.svg";
import youTubeIcon from "@/entities/atoms/SocialMediaLink/assets/youtube.svg";
import { socialMedia } from "@/lib/metadata";

type SocialMediaProps = {
  /**
   * Network to link to.
   */
  variant: SocialMediaLinkVariant;
} & HTMLAttributes<HTMLAnchorElement>;

const getSocialMediaDetails = (
  variant: SocialMediaLinkVariant
): [string, string] => {
  switch (variant) {
    case "bluesky":
      return [socialMedia.blueSky, blueskyIcon.src];
    case "facebook":
      return [socialMedia.facebook, facebookIcon.src];
    case "github":
      return [socialMedia.github, gitHubIcon.src];
    case "instagram":
      return [socialMedia.instagram, instagramIcon.src];
    case "linkedin":
      return [socialMedia.linkedin, linkedInIcon.src];
    case "x":
      return [socialMedia.x, xIcon.src];
    case "youtube":
      return [socialMedia.youtube, youTubeIcon.src];
  }
};

/**
 * Icon that links to the requested social media network.
 */
export function SocialMediaLink({
  variant,
  children,
  style,
  ...rest
}: SocialMediaProps) {
  const [url, icon] = getSocialMediaDetails(variant);
  return (
    <Link
      className={styles.root}
      href={url}
      target="_blank"
      rel="noopener"
      data-testid={SocialMediaLink.name}
      style={{
        ...style,
        maskImage: `url(${icon})`,
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}
