import { ContentPlate, Heading, Link } from "@/entities";
import { PortfolioPlateProps } from "./types";
import { siteOrigin } from "@/lib/domains";

export function PortfolioPlate({
  contentPlateProps,
  heading,
  url,
  children,
  ...rest
}: PortfolioPlateProps) {
  const urlToShow = url?.startsWith("http") ? url : `${siteOrigin}${url}`;
  return (
    <ContentPlate
      {...contentPlateProps}
      data-testid={PortfolioPlate.name}
      {...rest}
    >
      <Heading level="h3">{heading}</Heading>
      {url ? (
        <Link href={url}>{urlToShow}</Link>
      ) : !contentPlateProps.embedUrl ? (
        <pre>(URL not public)</pre>
      ) : (
        <></>
      )}
      {children}
    </ContentPlate>
  );
}
