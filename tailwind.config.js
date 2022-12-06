var Colors = {
  black: "rgba(0, 0, 0, 1)",
  white: "rgba(255, 255, 255, 1)",
  magenta: "rgba(216, 63, 135, 1)",
  lightGray: "rgba(246, 246, 246, 1)",
  textGray: "rgba(151, 151, 151, 1)",
  darkGray: "rgba(232, 232, 232, 1)",
  whiteGray: "rgba(218, 218, 218, 1)",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: Colors.magenta,
        black: Colors.black,
        white: Colors.white,
        lightGray: Colors.lightGray,
        typeText: Colors.textGray,
        darkGray: Colors.darkGray,
        whiteGray: Colors.whiteGray,
      },
    },
  },
  plugins: [],
};
