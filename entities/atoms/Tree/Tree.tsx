import { Root, Leaves, Trunk, sway } from "./styles";
import { CSSProperties, HTMLAttributes } from "react";
import type { TreeWindDirection } from "./types";
import { lcgNextRand, makeLCG } from "@/lib/random";

const getAnimationValues = (
  windDirection: TreeWindDirection
): CSSProperties => {
  switch (windDirection) {
    case "left":
      return { "--moveTo": -13, "--swayTo": 10 } as CSSProperties;
    case "right":
      return { "--moveTo": 13, "--swayTo": -10 } as CSSProperties;
    default:
      return { "--moveTo": 0, "--swayTo": -0 } as CSSProperties;
  }
};

export type TreeProps = {
  /**
   * Direction the tree will lean.
   */
  windDirection?: TreeWindDirection;
  /**
   * Amount the tree sways.
   */
  swayAmount?: number;
} & HTMLAttributes<HTMLOrSVGElement>;

/**
 * A tree rendered and animated using html and css. The tree tilts depending on the windDirection prop.
 */
export function Tree({
  windDirection = "none",
  swayAmount = 5,
  ...rest
}: TreeProps) {
  const treeLCG = makeLCG();
  return (
    <Root
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="256"
      height="256"
      viewBox="0 0 90 90"
      xmlSpace="preserve"
      data-testid={Tree.name}
      {...rest}
    >
      <defs>
        <linearGradient id="TrunkGradient">
          <stop offset="0%" stopColor="#5A3113" />
          <stop offset="50%" stopColor="#b8662a" />
          <stop offset="100%" stopColor="#5A3113" />
        </linearGradient>
        <linearGradient id="LeaveGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#32c953" />
          <stop offset="100%" stopColor="#194723" />
        </linearGradient>
      </defs>
      <Trunk x={40} y={70} height={20} width={10} fill="url(#TrunkGradient)" />
      <Leaves
        d="M 60.063 78.819 c -0.018 0 -0.034 0 -0.052 0 C 54.319 78.644 49.236 76.163 45 73.729 c -4.237 2.436 -9.319 4.915 -15.01 5.091 c -0.685 -0.002 -1.311 -0.377 -1.582 -1.011 c -0.274 -0.643 -0.13 -1.374 0.368 -1.864 c 1.083 -1.067 1.864 -2.094 2.375 -3.121 c -5.52 0.2 -10.757 -0.479 -15.575 -2.021 c -0.66 -0.211 -1.109 -0.795 -1.145 -1.487 c -0.037 -0.708 0.36 -1.35 1.01 -1.635 c 3.895 -1.709 7.698 -4.114 11.318 -7.156 c -2.407 0.301 -4.696 0.206 -6.821 -0.283 c -0.667 -0.153 -1.167 -0.692 -1.274 -1.372 c -0.106 -0.68 0.205 -1.346 0.792 -1.696 c 4.998 -2.978 8.448 -5.876 10.517 -8.837 c -1.743 0.323 -3.348 0.264 -4.885 -0.179 c -0.618 -0.178 -1.063 -0.684 -1.165 -1.321 c -0.103 -0.645 0.181 -1.298 0.721 -1.663 c 5.038 -3.407 9.042 -7.35 11.914 -11.73 c -1.874 0.309 -3.782 0.252 -5.682 -0.174 c -0.649 -0.145 -1.15 -0.664 -1.276 -1.323 c -0.124 -0.654 0.149 -1.317 0.697 -1.688 c 3.359 -2.272 6.214 -5.53 8.493 -9.69 c -1.446 0.161 -2.946 0.126 -4.465 -0.104 c -0.627 -0.095 -1.143 -0.524 -1.344 -1.121 c -0.202 -0.596 -0.054 -1.25 0.386 -1.706 C 36.865 14.009 40.076 8.722 43.471 1 C 43.738 0.393 44.338 0 45 0 s 1.262 0.393 1.528 1 c 3.395 7.72 6.605 13.007 10.105 16.639 c 0.44 0.457 0.587 1.111 0.385 1.707 s -0.717 1.024 -1.344 1.119 c -1.52 0.229 -3.02 0.264 -4.465 0.104 c 2.279 4.16 5.134 7.418 8.492 9.69 c 0.548 0.37 0.822 1.032 0.698 1.687 c -0.125 0.659 -0.626 1.179 -1.277 1.324 c -1.898 0.425 -3.807 0.483 -5.682 0.173 c 2.871 4.379 6.876 8.323 11.915 11.73 c 0.54 0.365 0.822 1.018 0.721 1.662 c -0.102 0.638 -0.547 1.145 -1.165 1.322 c -1.536 0.443 -3.142 0.503 -4.886 0.179 c 2.068 2.961 5.52 5.859 10.518 8.837 c 0.588 0.352 0.898 1.017 0.792 1.696 c -0.106 0.681 -0.606 1.219 -1.273 1.372 c -2.125 0.489 -4.412 0.584 -6.821 0.283 c 3.62 3.042 7.424 5.447 11.318 7.156 c 0.65 0.285 1.047 0.927 1.01 1.635 c -0.035 0.692 -0.484 1.276 -1.144 1.487 c -4.819 1.54 -10.056 2.219 -15.577 2.021 c 0.511 1.027 1.293 2.054 2.376 3.122 c 0.497 0.489 0.642 1.221 0.367 1.863 C 61.327 78.427 60.731 78.819 60.063 78.819 z "
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
        fill="url(#LeaveGradient)"
        style={
          {
            "--swayAmount": swayAmount,
            animationDelay: `-${lcgNextRand(treeLCG)}s`,
            ...getAnimationValues(windDirection),
          } as CSSProperties
        }
      />
    </Root>
  );
}
