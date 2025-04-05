import { ButtonProps } from "@/entities/atoms/Button/Button.types";
import styles from "./Button.module.scss";

/**
 * Clickable button for executing actions.
 */
export function Button({ variant = "standard", ...rest }: ButtonProps) {
  return (
    <button
      className={`${styles.root} ${variant === "transparent" ? styles.rootTransparent : ""}`}
      data-testid={Button.name}
      {...rest}
    />
  );
}
