import { Video } from "./Video";
import { Meta, StoryObj } from "@storybook/react";
import trampolinePosterImage from "../../assets/trampoline-poster.png";

const meta: Meta<typeof Video> = {
    component: Video,
    args: {
        poster: trampolinePosterImage.src,
        webmSrc: "https://ftjjvjgljna2ohz8.public.blob.vercel-storage.com/trampoline-cambs.webm",
    },
};
export default meta;

export const Default: StoryObj<typeof Video> = {};
