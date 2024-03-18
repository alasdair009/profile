import {ColorItem, ColorPalette} from '@storybook/blocks';
import {colorsBrand, colorsGrey} from "@/entities/design-tokens/colors/colors";
import {Meta} from "@storybook/react";

export const autoDocsTemplate = () => (
    <>
        <ColorPalette>
            <ColorItem title="Greys" subtitle="Some of the greys" colors={colorsGrey} />
            <ColorItem title="Brand" subtitle="Main brand colors" colors={colorsBrand} />
        </ColorPalette>
    </>
);

const meta: Meta = {
    title: "Colors"
};
export default meta;