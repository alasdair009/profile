"use client"
import styled from "styled-components";
import {colors} from "@/entities";

export const Root = styled.audio`
    appearance: none;
    
    &::-webkit-media-controls-panel {
        background: ${colors.greenGrass};
    }
    
    &::-webkit-media-controls-current-time-display,
    &::-webkit-media-controls-time-remaining-display {
        color: ${colors.whiteGhost};
    }
`;