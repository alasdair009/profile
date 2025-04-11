import variables from "./Animations.module.scss";

export const curves = {
  default: variables.animationCurveDefault.replaceAll('"', ""),
  easeBoth: variables.animationCurveEaseBoth.replaceAll('"', ""),
  linear: variables.animationCurveLinear.replaceAll('"', ""),
};
