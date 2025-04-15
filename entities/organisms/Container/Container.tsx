import styles from "./Container.module.scss";
import { HTMLAttributes } from "react";

type HeaderProps = {} & HTMLAttributes<HTMLDivElement>;
export function Container({ children, className, ...rest }: HeaderProps) {
  return (
    <section
      className={`${styles.root} ${className}`}
      data-testid={Container.name}
      {...rest}
    >
      {children}
    </section>
  );
}
