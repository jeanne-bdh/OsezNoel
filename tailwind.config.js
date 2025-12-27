/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0E3063",
        primary: "#2A5E99",
        secondary: "#91BDFF",
        blackCustom: "#43291F",
      },
      fontFamily: {
        content: ["Nova Slim", "sans-serif"],
        title: ["Great Vibes", "cursive"],
      },
    },
  },
  plugins: [],
}

