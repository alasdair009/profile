import type { LinkProps } from "./types";
import { isExternalDomain } from "@/lib/domains";
import newTabIcon from "../../assets/new-tab-icon.svg";
import Image from "next/image";
import { Link as ViewTransitionLink } from "next-view-transitions";
import styles from "./Link.module.css";
import { lineHeights } from "../../design-tokens/typography";
import { CSSProperties } from "react";
import { IFrame } from "../IFrame";

/**
 * Link to a new path or url.
 */
export function Link({
  variant = "regular",
  hoverFrame = false,
  children,
  href,
  lines,
  style,
  className,
  ...rest
}: LinkProps) {
  const isExternalURL = isExternalDomain(href);

  return (
    <ViewTransitionLink
      className={`${className} ${styles.root} ${variant === "large" ? styles.Large : ""} ${lines ? styles.clamp : ""}`}
      href={href}
      target={isExternalURL ? "_blank" : "_self"}
      rel={isExternalURL ? "noopener" : undefined}
      data-testid={Link.name}
      style={
        {
          ...style,
          "--line-height": lineHeights.p,
          "--number-of-lines": lines,
        } as CSSProperties
      }
      {...rest}
    >
      {children ? children : href}
      {isExternalURL && (
        <Image
          className={styles.newTabIcon}
          src={newTabIcon}
          title="Third party site, opens in a new tab."
          alt="Icon to represent this opens in a new tab"
        />
      )}
      {hoverFrame && (
        <div className={styles.hoverIFrameWrapper}>
          <IFrame className={styles.hoverIFrame} src={href} />
        </div>
      )}
    </ViewTransitionLink>
  );
}
