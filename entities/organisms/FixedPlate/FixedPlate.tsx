import { FixedImage, Root } from "./styles";
import { HTMLAttributes } from "react";
import skyImage from "@/entities/assets/sky.jpg";
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
    <Root {...rest}>
      <FixedImage placeholder={placeholder} src={image} alt={alt} />
    </Root>
  );
}
