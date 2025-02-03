"use client";
import styled from "styled-components";
import Link from "next/link";
import { SocialMediaLinkVariant } from "./SocialMediaLinks.types";
import { animationDurationCSS, colors, sizes } from "@/entities";
import xIcon from "./assets/x.svg";
import instagramIcon from "./assets/instagram.svg";
import linkedInIcon from "./assets/linkedin.svg";
import gitHubIcon from "./assets/github.svg";
import facebookIcon from "./assets/facebook.svg";
import youTubeIcon from "./assets/youtube.svg";
import blueskyIcon from "./assets/bluesky.svg";

const getMaskIcon = (variant: SocialMediaLinkVariant): string => {
  switch (variant) {
    case "bluesky":
      return blueskyIcon.src;
    case "facebook":
      return facebookIcon.src;
    case "github":
      return gitHubIcon.src;
    case "instagram":
      return instagramIcon.src;
    case "linkedin":
      return linkedInIcon.src;
    case "x":
      return xIcon.src;
    case "youtube":
      return youTubeIcon.src;
  }
};

export const Root = styled(Link)<{ $variant: SocialMediaLinkVariant }>`
  align-items: center;
  aspect-ratio: 1;
  background: black;
  color: transparent;
  display: flex;
  justify-content: center;
  -webkit-mask: url(${({ $variant }) => getMaskIcon($variant)}) no-repeat center;
  mask: url(${({ $variant }) => getMaskIcon($variant)}) no-repeat center;
  -webkit-mask-size: contain;
  mask-size: contain;
  overflow: hidden;
  position: relative;
  width: ${sizes.s48.rem};
  
  &::before {
    background: linear-gradient(${colors.whiteGhost} 50%, ${colors.greenGrass} 50%, ${colors.greenGrass} 100%) 0 0;
    content: '';
    height: 200%;
    left: 0;
    position: absolute;
    top: 0;
    transition: all ${animationDurationCSS(0.25)};
    width: 100%;
  }

  &:hover::before {
    top: -100%;
  }
}
`;
