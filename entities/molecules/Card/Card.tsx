import { CardImage, CardLink, Content, Date, Figure, Root } from "./styles";
import { HTMLAttributes } from "react";
import { Heading } from "@/entities";
import { StaticImageData } from "next/image";
import amLogo from "../../assets/am.svg";

type CardProps = {
  href: string;
  title: string;
  image?: StaticImageData;
  imageAlt?: string;
  date: Date;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Box with image and copy that links to another page
 */
export function Card({
  href,
  title,
  image = amLogo,
  imageAlt = "AM Logo",
  date,
  ...rest
}: CardProps) {
  return (
    <Root {...rest}>
      <CardLink href={href}>
        <Figure>
          <CardImage src={image} alt={imageAlt} fill={true} />
        </Figure>
        <Content>
          <Heading level="h3" as="h2" align="center">
            {title}
          </Heading>
          <Date dateTime={date.toISOString()}>
            {date.toLocaleDateString("en-GB", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </Date>
        </Content>
      </CardLink>
    </Root>
  );
}
