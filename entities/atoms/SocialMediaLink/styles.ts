"use client";
import styled from "styled-components";
import Link from "next/link";
import { SocialMediaLinkVariant } from "./SocialMediaLinks.types";
import { colors, sizes } from "@/entities";
import xIcon from "./assets/x.svg";
import linkedInIcon from "./assets/linkedin.svg";
import gitHubIcon from "./assets/github.svg";

const getMaskIcon = (variant: SocialMediaLinkVariant) => {
  switch (variant) {
    case "github":
      return gitHubIcon.src;
    case "linkedin":
      return linkedInIcon.src;
    case "x":
      return xIcon.src;
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
  width: ${sizes.s64.rem};
  
  &::before {
    background: linear-gradient(${colors.whiteGhost} 50%, ${colors.greenGrass} 50%, ${colors.greenGrass} 100%) 0 0;
    content: '';
    height: 200%;
    left: 0;
    position: absolute;
    top: 0;
    transition: all 0.25s;
    width: 100%;
  }

  &:hover::before {
    top: -100%;
  }
}
`;
