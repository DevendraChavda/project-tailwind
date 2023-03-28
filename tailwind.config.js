/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        sienna: {
          50: "#fdf4f3",
          100: "#fce6e4",
          200: "#fbd1cd",
          300: "#f7b1aa",
          400: "#f18278",
          500: "#e65c4f",
          600: "#d23e30",
          700: "#b13024",
          800: "#922c22",
          900: "#7a2a22",
        },
        calypso: {
          50: "#f4f8fb",
          100: "#e8eff6",
          200: "#ccdeeb",
          300: "#9ec4db",
          400: "#6aa5c6",
          500: "#488aaf",
          600: "#326789",
          700: "#2c5978",
          800: "#284c64",
          900: "#264154",
        },
        glacier: {
          50: "#f4f7fb",
          100: "#e8eef6",
          200: "#ccdceb",
          300: "#a0c0d9",
          400: "#78a6c8",
          500: "#4a82ad",
          600: "#386991",
          700: "#2e5476",
          800: "#2a4862",
          900: "#273e53",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, matchComponents, theme, addVariant }) {
      addComponents({
        ".wraper": {
          maxWidth: "100%",
          "@media (min-width: 640px)": {
            maxWidth: "1240px",
            margin: "0 auto",
          },
        },
      });
    }),
  ],
};
