/** @type {import('tailwindcss').Config} */
const defaultTheme=require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,jsx,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans:['ClashDisplay-Regular',...defaultTheme.fontFamily.sans]
      },
      colors:{
        tomato:"#E50914",
        marigold:"3ffbe0b"
      }
    },
  },
  plugins: [],
}