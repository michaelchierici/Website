/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: 12,
      md: 20,
      lg: 25,
      xl: 28,
    },
    colors: {
      blue500: "#4773a7",
      green500: "#16db65",
      green300: "#95efb9",

      black600: "#1d1e18",
      gray500: "#d9d9d9",
    },
    extend: {
      fontFamily: "Lato, Montserrat, sans-serif",
    },
  },
  plugins: [],
};
