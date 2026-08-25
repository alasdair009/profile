import { ContentPlate, Heading, Link } from "@/entities";
import { PortfolioPlateProps } from "./types";
import { siteOrigin } from "@/lib/domains";

const generateUrlToShow = (url?: string) => {
  if (!url) {
    return undefined;
  }
  const urlForAttribute = url.startsWith("http") ? url : `${siteOrigin}${url}`;
  const urlToShow = urlForAttribute.replace("https://", "");
  return { urlToShow, urlForAttribute };
};

export function PortfolioPlate({
  contentPlateProps,
  heading,
  url,
  children,
  ...rest
}: PortfolioPlateProps) {
  const urlDetails = generateUrlToShow(url);
  return (
    <ContentPlate
      {...contentPlateProps}
      data-testid={PortfolioPlate.name}
      {...rest}
    >
      <Heading level="h3">{heading}</Heading>
      {urlDetails ? (
        <Link href={urlDetails.urlForAttribute}>{urlDetails.urlToShow}</Link>
      ) : !contentPlateProps.embedUrl ? (
        <pre>(URL not public)</pre>
      ) : (
        <></>
      )}
      {children}
    </ContentPlate>
  );
}
