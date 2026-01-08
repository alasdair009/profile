import type { CSSProperties, JSX } from "react";
import styles from "./Animations.module.css";

type AnimationViewerProps = {
  animationNames: Record<string, CSSProperties["animationName"]>;
};

export function AnimationViewer({ animationNames }: AnimationViewerProps) {
  return (
    <div className={styles.animationViewer}>
      {Object.keys(animationNames).map((animationName) => {
        return (
          <div className={styles.animationView}>
            <span
              className={styles.animationViewInner}
              style={{ animationName: animationNames[animationName] }}
            >
              {animationName}
            </span>
          </div>
        );
      })}
    </div>
  );
}
