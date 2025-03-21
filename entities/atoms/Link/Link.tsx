import { HoverIFrame, HoverIFrameWrapper, NewTabIcon, Root } from "./styles";
import type { LinkProps } from "./types";
import { isExternalDomain } from "@/lib/domains";
import newTabIcon from "../../assets/new-tab-icon.svg";

/**
 * Link to a new path or url.
 */
export function Link({
  variant = "regular",
  hoverFrame = false,
  children,
  href,
  lines,
  ...rest
}: LinkProps) {
  const isExternalURL = isExternalDomain(href);

  return (
    <Root
      $variant={variant}
      $lines={lines}
      href={href}
      target={isExternalURL ? "_blank" : "_self"}
      rel={isExternalURL ? "noopener" : undefined}
      data-testid={Link.name}
      {...rest}
    >
      {children ? children : href}
      {isExternalURL && (
        <NewTabIcon
          src={newTabIcon}
          title="Third party site, opens in a new tab."
          alt="Icon to represent this opens in a new tab"
        />
      )}
      {hoverFrame && (
        <HoverIFrameWrapper>
          <HoverIFrame src={href} />
        </HoverIFrameWrapper>
      )}
    </Root>
  );
}
