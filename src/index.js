module.exports = function ({ addVariant, addUtilities, config, e }) {
  addVariant("rtl", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `[dir='rtl'] .${e(`rtl${separator}${className}`)}`;
    });
  });

  const newUtilities = {
    // float
    [`[dir='rtl'] .${e(`rtl${config().separator}float-right`)}`]: {
      float: "right !important",
    },
    [`[dir='rtl'] .${e(`rtl${config().separator}float-left`)}`]: {
      float: "left !important",
    },
    // clear
    [`[dir='rtl'] .${e(`rtl${config().separator}clear-right`)}`]: {
      clear: "right !important",
    },
    [`[dir='rtl'] .${e(`rtl${config().separator}clear-left`)}`]: {
      clear: "left !important",
    },
    // margin
    [`[dir='rtl'] .${e(`rtl${config().separator}mr-unset`)}`]: {
      "margin-right": "unset !important",
    },
    [`[dir='rtl'] .${e(`rtl${config().separator}ml-unset`)}`]: {
      "margin-left": "unset !important",
    },
    // padding
    [`[dir='rtl'] .${e(`rtl${config().separator}pr-unset`)}`]: {
      "padding-right": "unset !important",
    },
    [`[dir='rtl'] .${e(`rtl${config().separator}pl-unset`)}`]: {
      "padding-left": "unset !important",
    },
  };

  addUtilities(newUtilities, { respectImportant: false });
};
