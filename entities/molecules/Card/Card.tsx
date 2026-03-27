import Image, { ImageProps } from "next/image";
import { Link } from "../../atoms/Link";
import { HTMLAttributes } from "react";
import { ElectricBorder, Heading } from "@/entities";
import { StaticImageData } from "next/image";
import amLogo from "../../assets/am.svg";
import styles from "./Card.module.css";
import { toRem } from "@/styles/style-helpers";

type CardProps = {
  href: string;
  title: string;
  image?: StaticImageData | string;
  imageAlt?: string;
  imageLoading?: ImageProps["loading"];
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
  imageLoading = undefined,
  date,
  ...rest
}: CardProps) {
  return (
    <article className={styles.root} data-testid={Card.name} {...rest}>
      <ElectricBorder className={styles.electric} speed={0.2}>
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
              loading={imageLoading}
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
      </ElectricBorder>
    </article>
  );
}
