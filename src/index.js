module.exports = function ({ addVariant, e }) {
  addVariant("rtl", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `[dir='rtl'] .${e(`rtl${separator}${className}`)}`;
    });
  });
};
