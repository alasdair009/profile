"use client";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import styles from "./BaseLabel.module.scss";

type BaseLabelProps<T extends ElementType> = {
  as?: "label" | "span";
  children: ReactNode;
};

/**
 * Base Label for input fields.
 */
export function BaseLabel<T extends ElementType = "label">({
  children,
  as,
  ...rest
}: BaseLabelProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseLabelProps<T>>) {
  const Root = as ?? "label";
  return (
    <Root
      as={as}
      className={styles.root}
      data-testid={BaseLabel.name}
      {...rest}
    >
      {children}
    </Root>
  );
}
