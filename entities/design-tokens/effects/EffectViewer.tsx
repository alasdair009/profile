import styles from "./effects.module.css";

type EffectViewerProps = {
  effectProperty: string;
  effects: Record<string, number | string>;
};

export function EffectViewer({ effectProperty, effects }: EffectViewerProps) {
  return (
    <div className={styles.root} data-testid={EffectViewer.displayName}>
      {Object.keys(effects).map((effectKey) => {
        const effectValue = effects[effectKey];
        return (
          <div className={styles.outer}>
            <span
              className={styles.inner}
              style={{ [effectProperty]: effectValue }}
            >
              {effectKey}
            </span>
          </div>
        );
      })}
    </div>
  );
}
EffectViewer.displayName = "EffectViewer";
