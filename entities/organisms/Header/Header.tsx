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
import { Button, sizes } from "@/entities";
import Link from "next/link";
import notificationIcon from "../../assets/notification.svg";
import Image from "next/image";

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
          <Button
            type="button"
            variant="transparent"
            style={{ display: "none" }}
          >
            <Image
              src={notificationIcon}
              alt="Notifications icon"
              style={{ height: sizes.s24.rem, width: sizes.s24.rem }}
            />
          </Button>
        </HeaderLinks>
      </Inner>
    </Root>
  );
}
