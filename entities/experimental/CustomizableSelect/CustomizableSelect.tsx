import { HTMLAttributes } from "react";
import styles from "./CustomizableSelect.module.scss";

type SelectMenuProps = {
  /**
   * The default value on render.
   */
  defaultValue?: string | number;
} & HTMLAttributes<HTMLSelectElement>;

// https://open-ui.org/components/customizableselect/
/**
 * An experimental new spec for a styled dropdown box.
 */
export function CustomizableSelect({
  defaultValue,
  children,
  ...rest
}: SelectMenuProps) {
  return (
    <select className={styles.root} {...rest}>
      <button className={styles.selectArea}>
        {/*@ts-ignore*/}
        <selectedcontent className={styles.selectedContent} />
        <span className={styles.dropButton} />
      </button>
      {children}
    </select>
  );
}
