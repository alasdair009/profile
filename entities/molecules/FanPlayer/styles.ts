"use client"
import styled, {keyframes} from "styled-components";
import fanSvg from "./assets/fan.svg";
import {colors} from "@/entities";

const rotate = keyframes`
    0% {
        background-color: ${colors.redHeat};
        transform: translate(-50%, -50%);
    }
    25% {
        background-color: ${colors.greenGrass};
    }
    50% {
        background-color: ${colors.blueSea};
        transform: translate(-50%, -50%) rotate(360deg);
    }
    75% {
        background-color: ${colors.blackEvil};
    }
    100% {
        background-color: ${colors.redHeat};
        transform: translate(-50%, -50%) rotate(720deg);
    }
`;
export const Root = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    position: relative;
    width: 100vw;
    
    &::before {
        animation: ${rotate} 6s infinite linear;
        aspect-ratio: 1;
        background: ${colors.greenGrass};
        mask: url(${fanSvg.src}) no-repeat center;
        max-height: 100%;
        max-width: 100%;
        content: "";
        left: 50%;
        opacity: 0.5;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }
`;