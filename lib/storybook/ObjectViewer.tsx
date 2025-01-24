import { Source } from "@storybook/blocks";

import type { JSX } from "react";

export type ObjectViewerProps = {
  /**
   * The object to display
   */
  object: object;
  /**
   * The title of the code segment
   */
  title: string;
};

export function ObjectViewer({
  object,
  title,
}: ObjectViewerProps): JSX.Element {
  // Format the object as JSON with indentation
  const objectAsString = JSON.stringify(object, null, 4);

  return (
    <div title={title} data-testid={ObjectViewer.name}>
      <Source code={objectAsString} dark={true} />
    </div>
  );
}
