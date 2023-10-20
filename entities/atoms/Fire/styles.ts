import styled, {keyframes} from "styled-components";
import {rem, rgba} from "polished";

const rise = keyframes`
  from {
    opacity: 0;
    transform: translateY(0) scale(1);
  }
  25% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(-10em) scale(0);
  }
`;

const spreadParticles = (particleSize: number, numberOfParticles: number, duration: number) => {
    let particleSpread = "";
    for (let i = 0; i < numberOfParticles; i++) {
        particleSpread += `
            &:nth-of-type(${i}) {
                animation-delay: calc(${duration}s * ${Math.random()});
                left: calc((100% - ${rem(particleSize)}) * ${(i - 1)/ numberOfParticles});
            }
        `
    }

    return particleSpread;
}

export const Root = styled.div<{baseColor: string, particleSize: number, numberOfParticles: number, duration: number}>`
  filter: blur(0.32);
  position: relative;
  
  span {
    animation: ${rise} ${({duration}) => duration}s ease-in infinite;
    aspect-ratio: 1;
    background-image: radial-gradient(${({baseColor}) => baseColor} 20%, ${({baseColor}) => rgba(baseColor, 0)} 70%);
    border-radius: 50%;
    bottom: 0;
    mix-blend-mode: screen;
    opacity: 0;
    position: absolute;
    width: ${({particleSize}) => rem(particleSize)};

    ${({particleSize, numberOfParticles, duration}) =>  spreadParticles(particleSize, numberOfParticles, duration)}
  }
`;