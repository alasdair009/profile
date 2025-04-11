import styles from "./Container.module.scss";
import { HTMLAttributes } from "react";

type HeaderProps = {} & HTMLAttributes<HTMLDivElement>;
export function Container({ children, ...rest }: HeaderProps) {
  return (
    <section className={styles.root} data-testid={Container.name} {...rest}>
      {children}
    </section>
  );
}
