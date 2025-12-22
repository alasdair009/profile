import { Heading, Spinner } from "@/entities";
import { HTMLAttributes } from "react";
import styles from "./Loading.module.css";

type LoadingProps = HTMLAttributes<HTMLDivElement>;

export function Loading({ className, ...rest }: LoadingProps) {
  return (
    <article
      className={`${styles.root} ${className}`}
      data-testid={Loading.name}
      {...rest}
    >
      <Heading>Putting the springs in...</Heading>
      <Spinner />
    </article>
  );
}
