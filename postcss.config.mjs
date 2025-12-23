export default {
  plugins: {
    "@csstools/postcss-global-data": {
      files: ["./app/styles/_media.css"],
    },
    "postcss-nesting": {},
    "postcss-custom-media": {},
    "postcss-pxtorem": {
      rootValue: 16,
      unitPrecision: 4,
      propList: ["*"],
      mediaQuery: true,
    },
  },
};
