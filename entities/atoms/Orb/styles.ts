import styled, {keyframes} from "styled-components";
import {sizes} from "../../design-tokens/dimensions";
import {rem} from "polished";

const particleSize = sizes.s2.rem;
const baseHue = 0;

const rotate = keyframes`
  100% {
    transform: rotateY(360deg) rotateX(360deg);
  }
`;

const generateKeyFrame = () => {

}

const defineParticles = (numberOfParticles: number) => {
    let particleDefinitions = "";
    for (let i = 0; i < numberOfParticles; i++) {
        const z = `${Math.random() * 359}deg`; // random angle to rotateZ
        const y = `${Math.random() * 359}deg`; // random to rotateX
        const hue = ((40 / numberOfParticles * i) + baseHue); // set hue

        particleDefinitions += `
            &:nth-of-type(${i}) {
                animation: orbit${i} 14s infinite;
                animation-delay: calc(${i} * .01s); 
                background-color: hsla(${hue}, 100%, 50%, 1);
            }
        `
    }

    return particleDefinitions;
};
export const Root = styled.div<{$numberOfParticles: number}>`
  animation: ${rotate} 14s infinite linear;
  height: 0;
  perspective: 1000px;
  position: relative;
  transform-style: preserve-3d;
  width: 0;
  
  span {
    border-radius: 50%;
    height: ${particleSize};
    opacity: 0;
    position: absolute;
    width: ${particleSize};

    ${({$numberOfParticles}) =>  defineParticles($numberOfParticles)}
  }
`;