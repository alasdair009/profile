import {Meta, StoryObj} from "@storybook/react";
import {Fire} from "./Fire";

const meta: Meta<typeof Fire> = {
    component: Fire,
    args: {
        baseColor: "#ff5000",
        particleSize: 80,
        numberOfParticles: 50,
        duration: 1,
    },
    argTypes: {
        baseColor: {
            control: {
                type: "color",
                presetColors: ["#ff5000", "#00ff00", "#276ba9"],
            },
        },
        particleSize: {
            control: { type: 'range', min: 1, max: 100, step: 1 }
        },
        numberOfParticles: {
            control: { type: 'range', min: 1, max: 250, step: 1 }
        },
        duration: {
            control: { type: 'range', min: 0.1, max: 5, step: 0.1 }
        }
    }
}
export default meta;

export const Default: StoryObj<typeof Fire> = {
    args: {
        style: {height: 200}
    }
};