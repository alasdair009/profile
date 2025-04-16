import variables from "./Colors.module.scss";

export const colorsGrey = {
  blackEvil: variables.colorblackEvil,
  greyLight: variables.colorGreyLight,
  greyDark: variables.colorGreyDark,
  whiteGhost: variables.colorWhiteGhost,
};

export const colorsBrand = {
  blueSea: variables.colorBlueSea,
  greenGrass: variables.colorGreenGrass,
  redHeat: variables.colorRedHeat,
};

export const colors = {
  ...colorsGrey,
  ...colorsBrand,
};
