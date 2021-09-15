module.exports = function ({ addVariant, addUtilities, e }) {
  addVariant("rtl", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `[dir='rtl'] .${e(`rtl${separator}${className}`)}`;
    });
  });

  const newUtilities = {
    // margin
    ".mr-unset": {
      "margin-right": "unset !important",
    },
    ".ml-unset": {
      "margin-left": "unset !important",
    },
    // padding
    ".pr-unset": {
      "padding-right": "unset !important",
    },
    ".pl-unset": {
      "padding-left": "unset !important",
    },
  };

  addUtilities(newUtilities, ["responsive", "rtl"]);
};
