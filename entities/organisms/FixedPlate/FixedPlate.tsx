import { FixedImage, Root } from "./styles";
import { HTMLAttributes } from "react";
import skyImage from "@/entities/assets/sky.webp";
import { StaticImageData } from "next/image";

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
    <Root data-testid={FixedPlate} {...rest}>
      <FixedImage placeholder={placeholder} src={image} alt={alt} />
    </Root>
  );
}
