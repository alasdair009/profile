import { HTMLAttributes } from "react";
import skyImage from "@/entities/assets/sky.webp";
import { StaticImageData } from "next/image";
import styles from "./FixedPlate.module.css";
import Image from "next/image";

type FixedPlateProps = {
  image?: StaticImageData;
  alt?: string;
  placeholder?: "blur" | "empty";
} & HTMLAttributes<HTMLDivElement>;

export function FixedPlate({
  image = skyImage,
  placeholder = "blur",
  alt = "Ali trampolining outside somersaulting in the air",
  ...rest
}: FixedPlateProps) {
  return (
    <figure className={styles.root} data-testid={FixedPlate.name} {...rest}>
      <Image
        className={styles.fixedImage}
        placeholder={placeholder}
        src={image}
        alt={alt}
      />
    </figure>
  );
}
