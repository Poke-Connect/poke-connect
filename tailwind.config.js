var Colors = {
  black: "rgba(0, 0, 0, 1)",
  white: "rgba(255, 255, 255, 1)",
  magenta: "rgba(216, 63, 135, 1)",
  whiteGray: "rgba(243, 244, 245, 1)",
  gray: "rgba(151, 151, 151, 1)",
  lightGray: "rgba(246, 246, 246, 1)",
  midGray: "rgba(229, 229, 229, 1)",
  gray2: "rgba(232, 232, 232, 1)",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: Colors.magenta,
        lightGreen: "#A2FC15",
        lightGray: "#F6F6F6",
        lightGray2: "#979797",
        lightGray3: "#50555C",
        whiteGray: "#E8E8E8",
        lightYellow: "#A2FC15",
      },
    },
  },
  plugins: [],
};
