/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        "sm-991": "1366px", // Custom breakpoint for 991px
      },
    },
  },
  plugins: [],
};
  