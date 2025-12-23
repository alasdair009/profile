import Image from "next/image";
import { Link } from "../../atoms/Link";
import { HTMLAttributes } from "react";
import { Heading, toRem } from "@/entities";
import { StaticImageData } from "next/image";
import amLogo from "../../assets/am.svg";
import styles from "./Card.module.css";

type CardProps = {
  href: string;
  title: string;
  image?: StaticImageData | string;
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
    <article className={styles.root} data-testid={Card.name} {...rest}>
      <Link
        className={styles.cardLink}
        href={href}
        data-testid={`${Card.name}Link`}
      >
        <figure className={styles.figure}>
          <Image
            className={styles.cardImage}
            src={image}
            alt={imageAlt}
            fill={true}
            sizes={`(max-width: var(--breakpoints-xsmall)) ${toRem(312)}, ${toRem(240)}`}
          />
        </figure>
        <div>
          <Heading level="h3" as="h2" align="center" lines={3}>
            {title}
          </Heading>
          <time className={styles.date} dateTime={date.toISOString()}>
            {date.toLocaleDateString("en-GB", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        </div>
      </Link>
    </article>
  );
}
