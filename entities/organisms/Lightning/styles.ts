"use client";
import styled, {keyframes} from "styled-components";
import {globalDecorationMaxWidth} from "@/entities";
import {rem} from "polished";
import Image from "next/image";
import rainImage from "./assets/rain.png";

const rain = keyframes`
    from {
        background-position: 0 0;
    }

    to {
        background-position: -20% -100%;
    }
`;
export const Root = styled.section`
    position: relative;
`;

export const Inner = styled.div`
    display: flex;
    height: 100vh;
    margin: 0 auto;
    max-width: ${rem(globalDecorationMaxWidth)};
    overflow: hidden;
    position: relative;
    width: 100%;

    &::before {
        animation: ${rain} 0.3s linear infinite;
        background-image: url(${rainImage.src});
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transform: rotate(180deg);
        width: 100%;
    }
`;

export const Background = styled(Image)`
    height: 100%;
    object-fit: cover;
    width: 100%;
`;

export const Strike = styled(Image)`
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`;