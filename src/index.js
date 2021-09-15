module.exports = function ({ addVariant, addUtilities, config, e }) {
  addVariant("rtl", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `[dir='rtl'] .${e(`rtl${separator}${className}`)}`;
    });
  });

  const newUtilities = {
    // margin
    [`.${e(`rtl${config().separator}mr-unset`)}`]: {
      "margin-right": "unset !important",
    },
    [`.${e(`rtl${config().separator}ml-unset`)}`]: {
      "margin-left": "unset !important",
    },
    // padding
    [`.${e(`rtl${config().separator}pr-unset`)}`]: {
      "padding-right": "unset !important",
    },
    [`.${e(`rtl${config().separator}pl-unset`)}`]: {
      "padding-left": "unset !important",
    },
  };

  addUtilities(newUtilities, { respectImportant: false });
};
