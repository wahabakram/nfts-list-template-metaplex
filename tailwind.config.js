/** @type {import('tailwindcss').Config} */

const SUCCESS_COLOR = "#0AC18E";
const BLACK_RUSSIAN_LIGHT = "#18191D";
const BLACK_RUSSIAN_DARK = "#131417";
const STROM_GREY = "#808287";
const DIM_GREY = "#666666";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: (theme) => ({
        success: SUCCESS_COLOR,
      }),
      backgroundColor: (theme) => ({
        "black-russian-dark": BLACK_RUSSIAN_DARK,
        "black-russian-light": BLACK_RUSSIAN_LIGHT,
        "strom-grey": STROM_GREY,
      }),
      stroke: (theme) => ({
        "dim-grey": DIM_GREY,
      }),
      fill: (theme) => ({
        "dim-grey": DIM_GREY,
      }),
      borderRadius: (theme) => ({
        "4xl": "32px",
      }),
    },
    fontFamily: {
      sfProText: ["SF Pro Text"],
      sfProTextLight: ["SF Pro Text Light"],
    },
  },
  plugins: [],
};
