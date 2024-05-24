import { NewTabIcon, StaticLink, TransitionLink } from "./styles";
import type { LinkProps } from "./types";
import { isExternalDomain } from "@/lib/domains";
import newTabIcon from "../../assets/new-tab-icon.svg";

/**
 * Link to a new path or url.
 */
export function Link({
  variant = "regular",
  children,
  href,
  ...rest
}: LinkProps) {
  const isExternalURL = isExternalDomain(href);

  if (process.env.ALLOW_TRANSITIONS) {
    return (
      <TransitionLink
        $variant={variant}
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
      </TransitionLink>
    );
  }

  return (
    <StaticLink
      $variant={variant}
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
    </StaticLink>
  );
}
