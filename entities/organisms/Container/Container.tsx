import styles from "./Container.module.css";
import { HTMLAttributes } from "react";

type HeaderProps = {} & HTMLAttributes<HTMLDivElement>;
export function Container({ children, className, ...rest }: HeaderProps) {
  return (
    <section
      className={`${styles.root} ${className}`}
      data-testid={Container.displayName}
      {...rest}
    >
      {children}
    </section>
  );
}
Container.displayName = "Container";
