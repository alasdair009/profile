import { HTMLAttributes } from "react";
import styles from "./DetailList.module.css";

type DetailListProps = {
  hasInlineContent?: boolean;
} & HTMLAttributes<HTMLDListElement>;

/**
 * Styled HTML dl element
 */
export function DetailList({
  hasInlineContent = false,
  className,
  children,
  ...rest
}: DetailListProps) {
  return (
    <dl
      className={`${styles.root} ${hasInlineContent ? styles.rootInline : undefined} ${className}`}
      data-testid={DetailList.name}
      {...rest}
    >
      {children}
    </dl>
  );
}
DetailList.displayName = "DetailList";
