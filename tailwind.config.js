/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightGreen:'#A2FC15',
        lightGray:'#F6F6F6',
        lightGray2:'#979797',
        lightGray3:'#50555C',
        whiteGray:'#E8E8E8',
        lightYellow:'#A2FC15',
      }
    },
  },
  plugins: [],
}