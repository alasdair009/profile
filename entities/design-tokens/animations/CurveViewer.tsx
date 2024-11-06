"use client";
import styled, { keyframes } from "styled-components";
import { borderRadii, colors, sizes } from "@/entities";
import { rem } from "polished";

type CurveViewerProps = {
  /**
   * Object of values for the css property.
   */
  curves: Record<string, string>;
  /**
   * Title of the property.
   */
  title: string;
};

const moveAnimation = keyframes`
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
`;

const Root = styled.section`
  margin-bottom: ${sizes.s32.rem};
`;

const CurveWrapper = styled.div`
  border: ${rem(1)} solid ${colors.whiteGhost};
  color: ${colors.whiteGhost};
  display: inline-flex;
  flex-direction: column;
  max-width: ${rem(147)};
  padding: ${sizes.s8.rem};
`;

const SVGWrapper = styled.div<{ curve: string; offsetPath: string }>`
  position: relative;

  &::after {
    animation: ${moveAnimation} 2s infinite alternate ${({ curve }) => curve};
    aspect-ratio: 1;
    background: ${colors.whiteGhost};
    border-radius: ${borderRadii.round};
    content: "";
    left: 0;
    offset-path: path("${({ offsetPath }) => offsetPath}");
    position: absolute;
    width: ${sizes.s8.rem};
  }
`;

/**
 * Displays a square with the passed css property applied to it.
 */
export function CurveViewer({ curves, title }: CurveViewerProps): JSX.Element {
  return (
    <Root title={title} data-testid={CurveViewer.name} style={{ display: "flex", gap: sizes.s8.rem }}>
      {Object.keys(curves).map((key) => {
        // Get the values from inside the brackets as an array
        const curve = curves[key];
        const matches = curve.match(/\((.*?)\)/);
        const curveValues = matches ? matches[1].split(",") : null;

        if (curveValues && curveValues.length === 4) {
          // SVGs invert the y-axis for paths
          const c1X = parseFloat(curveValues[0]) * 100;
          const c1Y = 100 - parseFloat(curveValues[1]) * 100;
          const c2x = parseFloat(curveValues[2]) * 100;
          const c2y = 100 - parseFloat(curveValues[3]) * 100;
          const cubicPath = `M 10 90 C ${c1X} ${c1Y}, ${c2x} ${c2y}, 90 10`;
          return (
            <CurveWrapper key={key}>
              <SVGWrapper offsetPath={cubicPath} curve={curves[key]}>
                <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <path d={cubicPath} stroke={colors.greenGrass} strokeWidth={3} fill="transparent" />
                </svg>
              </SVGWrapper>
              <h4 style={{ textAlign: "center" }}>{key}</h4>
            </CurveWrapper>
          );
        }

        return <p key={key}>Unable to render {key} curve</p>;
      })}
    </Root>
  );
}
