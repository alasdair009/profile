module.exports = {
  plugins: {
    "@csstools/postcss-global-data": {
      files: ["./app/styles/_media.css"],
    },
    "postcss-custom-media": {},
    "postcss-nesting": {},
    "postcss-pxtorem": {
      rootValue: 16,
      unitPrecision: 4,
      propList: ["*"],
      mediaQuery: true,
    },
  },
};
