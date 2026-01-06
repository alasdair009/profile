import styles from "./Animations.module.css";

import type { CSSProperties, JSX } from "react";

type CurveViewerProps = {
  /**
   * Object of values for the css property.
   */
  curves: Record<string, string>;
  /**
   * Title of the property.
   */
  title: string;
};

/**
 * Displays a square with the passed css property applied to it.
 */
export function CurveViewer({ curves, title }: CurveViewerProps): JSX.Element {
  return (
    <section
      className={styles.curveViewer}
      title={title}
      data-testid={CurveViewer.name}
    >
      {Object.keys(curves).map((key) => {
        // Get the values from inside the brackets as an array
        const curve = curves[key];
        const matches = curve.match(/\((.*?)\)/);
        const curveValues = matches ? matches[1].split(",") : null;

        if (curveValues && curveValues.length === 4) {
          // SVGs invert the y-axis for paths
          const c1X = parseFloat(curveValues[0]) * 100;
          const c1Y = 100 - parseFloat(curveValues[1]) * 100;
          const c2x = parseFloat(curveValues[2]) * 100;
          const c2y = 100 - parseFloat(curveValues[3]) * 100;
          const cubicPath = `M 10 90 C ${c1X} ${c1Y}, ${c2x} ${c2y}, 90 10`;
          return (
            <div className={styles.curveWrapper} key={key}>
              <div
                className={styles.svgWrapper}
                style={
                  {
                    "--offset-path": `path("${cubicPath}")`,
                    "--curve": curves[key],
                  } as CSSProperties
                }
              >
                <svg
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path className={styles.path} d={cubicPath} />
                </svg>
              </div>
              <h4 style={{ textAlign: "center" }}>{key}</h4>
            </div>
          );
        }

        return <p key={key}>Unable to render {key} curve</p>;
      })}
    </section>
  );
}
