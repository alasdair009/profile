import { ContentPlate, Heading, Link } from "@/entities";
import { PortfolioPlateProps } from "./types";

export function PortfolioPlate({
  contentPlateProps,
  heading,
  url,
  children,
  ...rest
}: PortfolioPlateProps) {
  return (
    <ContentPlate
      {...contentPlateProps}
      data-testid={PortfolioPlate.name}
      {...rest}
    >
      <Heading level="h3">{heading}</Heading>
      {url ? (
        <Link href={url} />
      ) : !contentPlateProps.embedUrl ? (
        <pre>(URL not public)</pre>
      ) : (
        <></>
      )}
      {children}
    </ContentPlate>
  );
}
