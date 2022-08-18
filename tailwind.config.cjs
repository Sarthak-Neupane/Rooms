/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#272727",
        "dark-secondary": "#2d2d2d",
        "dark-text": "#ffffff",
      },
      fontFamily: {
        sans: ["Poppins"],
        sans1: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
