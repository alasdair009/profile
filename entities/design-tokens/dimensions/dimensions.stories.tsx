import {Meta} from "@storybook/react";

export const autoDocsTemplate = () => (
    <>
    </>
);

const meta: Meta = {
    title: "Dimensions"
};
export default meta;

// import { Meta, Story } from "@storybook/blocks";
// import { DimensionViewer } from "../../../lib/storybook/DimensionViewer";
// import { breakpoints, sizes } from "./dimensions";
//
// <Meta title="Design Tokens/Dimensions" />
//
// # Dimensions
//
// ## Sizes
//
// Use the `sizes` object to maintain consistency in asset dimensions.
//
// Each size key has properties for the dimension in number (`raw`), `px` and `rem`.
//
// <Story name="Size units">
//   <DimensionViewer
//     units={sizes}
//     barUnits={Object.entries(sizes).reduce((acc, [key, sizes]) => {
//       acc[key] = sizes.rem;
//       return acc;
//     }, {})}
//     title="sizes"
//     sourceExample="width: ${sizes.s8.rem};"
//     objectName="sizes"
//   />
// </Story>
//
// ## Breakpoints
//
// These are used to adjust the content layout for different device screen widths.
//
// <Story name="Breakpoint units">
//   <DimensionViewer
//     units={breakpoints}
//     barUnits={breakpoints}
//     title="breakpoints"
//     suffix="px"
//     sourceExample="@media (${device.medium}){...}"
//     objectName="breakpoints"
//   />
// </Story>