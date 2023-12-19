import {
  Inner,
  Root,
  HeaderLogo,
  headerHeight,
  HeaderLinks,
  HeaderLink,
} from "./styles";
import { HTMLAttributes } from "react";
import amLogo from "../../assets/am.svg";
import { sizes } from "@/entities";
import Link from "next/link";

type HeaderProps = {} & HTMLAttributes<HTMLDivElement>;
export function Header({ children, ...rest }: HeaderProps) {
  return (
    <Root {...rest}>
      <Inner>
        <Link href="/">
          <HeaderLogo src={amLogo} alt="AM logo" height={sizes.s32.raw} />
        </Link>
        <HeaderLinks>
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/portfolio">Portfolio</HeaderLink>
          <HeaderLink href="/about-me">About Me</HeaderLink>
        </HeaderLinks>
      </Inner>
    </Root>
  );
}
