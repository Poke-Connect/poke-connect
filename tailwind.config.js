var Colors = {
  black: "rgba(0, 0, 0, 1)",
  white: "rgba(255, 255, 255, 1)",
  magentaLighter: "rgba(216, 63, 135, 0.2)",
  magentaLight: "rgba(216, 63, 135, 0.8)",
  magenta: "rgba(216, 63, 135, 1)",
  lightGray: "rgba(246, 246, 246, 1)",
  textGray: "rgba(151, 151, 151, 1)",
  darkGray: "rgba(232, 232, 232, 1)",
  whiteGray: "rgba(218, 218, 218, 1)",
  lineGray: "rgba(229, 229, 229, 1)",
  rust: "rgba(174,63,39,1)",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/line-clamp")],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: Colors.magentaLighter,
          light: Colors.magentaLight,
          DEFAULT: Colors.magenta,
        },
        black: Colors.black,
        white: Colors.white,
        lightGray: Colors.lightGray,
        typeText: Colors.textGray,
        darkGray: Colors.darkGray,
        whiteGray: Colors.whiteGray,
        lineGray: Colors.lineGray,
        socialPrimary: Colors.rust,
      },
      maxWidth: {
        "1/2": "50%",
        "3/5": "60%",
        "3/4": "75%",
      },
    },
  },
};
