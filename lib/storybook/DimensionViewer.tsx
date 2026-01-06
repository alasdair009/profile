import { Source } from "@storybook/addon-docs/blocks";
import type { HTMLAttributes, JSX } from "react";

import { ObjectViewer } from "./ObjectViewer";
import { colors } from "@/styles/tokens";

export type DimensionViewerProps = {
  /**
   * The units to display
   */
  units: Record<string, unknown>;
  /**
   * A simplified object that can be used for the DimensionBar interface
   */
  barUnits: Record<string, number>;
  /**
   * The title of the code segment
   */
  title: string;
  /**
   * The suffix to display after the unit
   */
  suffix?: string;
  /**
   * Source example
   */
  sourceExample: string;
  /**
   * The name of the object
   */
  objectName: string;
};

export function DimensionViewer({
  units,
  title,
  sourceExample,
  objectName,
  barUnits,
  suffix = "",
}: DimensionViewerProps): JSX.Element {
  return (
    <div data-testid={DimensionViewer.name}>
      <ObjectViewer object={units} title={objectName} />
      <p>
        To use these values import the <strong>{objectName}</strong> object and
        reference the required key.
      </p>
      <Source code={sourceExample} dark={true} language="css" />
      <DimensionBarWrapper title={title}>
        {Object.keys(barUnits).map((key, index) => {
          return (
            <DimensionBar
              key={`${title}${index}`}
              data-testid={DimensionViewer.name}
              width={`${barUnits[key]}${suffix}`}
            >
              <DimensionBarLabel>
                {barUnits[key]}
                {suffix}
                <br />({key})
              </DimensionBarLabel>
            </DimensionBar>
          );
        })}
      </DimensionBarWrapper>
    </div>
  );
}

const DimensionBarWrapper = ({ children }: HTMLAttributes<HTMLDivElement>) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      overflow: "scroll",
      width: "100%",
    }}
  >
    {children}
  </div>
);

const DimensionBar = ({
  children,
  width,
}: { width: string } & HTMLAttributes<HTMLDivElement>) => (
  <div
    style={{
      background: colors.colorGreenGrass,
      color: "white",
      flex: 1,
      marginBottom: "8px",
      width,
    }}
  >
    {children}
  </div>
);

const DimensionBarLabel = ({ children }: HTMLAttributes<HTMLSpanElement>) => (
  <span
    style={{
      display: "block",
      marginLeft: "8px",
    }}
  >
    {children}
  </span>
);
