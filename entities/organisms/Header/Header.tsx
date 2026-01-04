import { HTMLAttributes } from "react";
import amLogo from "../../assets/am.svg";
import { Link as HeaderLink } from "@/entities";
import { NotificationButton } from "./NotificationButton";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { sizes } from "../../../app/styles/tokens";

type HeaderProps = {} & HTMLAttributes<HTMLDivElement>;
export function Header({ children, ...rest }: HeaderProps) {
  return (
    <header className={styles.root} data-testid={Header.name} {...rest}>
      <nav className={styles.inner}>
        <Link href="/">
          <Image
            className={styles.headerLogo}
            src={amLogo}
            alt="AM logo"
            height={sizes.size32}
          />
        </Link>
        <div className={styles.headerLinks}>
          <HeaderLink
            className={`${styles.headerLink} ${styles.hideOnNarrow}`}
            href="/"
          >
            Home
          </HeaderLink>
          <HeaderLink className={styles.headerLink} href="/portfolio">
            Portfolio
          </HeaderLink>
          <HeaderLink className={styles.headerLink} href="/about-me">
            About
          </HeaderLink>
          <HeaderLink className={styles.headerLink} href="/blog">
            Blog
          </HeaderLink>
          <Header.NotificationButton
            isSubscribed={false}
            style={{ display: "none" }}
          />
        </div>
      </nav>
    </header>
  );
}

Header.NotificationButton = NotificationButton;
