"use client";
import { HTMLAttributes } from "react";
import styles from "./IFrame.module.css";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type IFrameProps = {
  /**
   * URL for the iframe content
   */
  src: string;
  /**
   * Title to describe frame content for accessibility
   */
  title: string;
  /**
   * Placeholder to load instead of the frame to reduce network requests
   */
  placeholder?: { image: StaticImageData; alt: string };
} & HTMLAttributes<HTMLDivElement>;

/**
 * An HTML iframe for external content
 */
export function IFrame({
  className = "",
  placeholder,
  src,
  ...rest
}: IFrameProps) {
  const [isSrcSet, setIsSrcSet] = useState(placeholder == undefined);
  return (
    <div
      className={`${styles.root} ${className}`}
      data-testid={IFrame.displayName}
      {...rest}
    >
      {placeholder && !isSrcSet && (
        <figure
          className={styles.placeholder}
          data-testid={`${IFrame.displayName}Placeholder`}
          onClick={() => setIsSrcSet(true)}
          title="Click to open"
        >
          <Image
            className={styles.placeholderImage}
            src={placeholder.image}
            alt={placeholder.alt}
          />
        </figure>
      )}
      <iframe
        className={`${styles.frame}`}
        data-src={src}
        src={isSrcSet ? src : undefined}
        allowFullScreen={true}
        data-testid={`${IFrame.displayName}Frame`}
      />
    </div>
  );
}
IFrame.displayName = "IFrame";
