import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tab: "900px",
      // main breakpoints for home's ProductBoxes to work properly
      main: "1080px",
      maintab: "790px",
      mainmob: "500px",
      // *
      mob: "400px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        orange: "#D87D4A",
        orangeLight: "#FBAF85",
        blacker: "#101010",
        black: "#000000",
        gray: "#f1f1f1",
        grayLight: "#fafafa",
        white: "#FFFFFF",
        red: "#CD2C2C",
      },
      backgroundColor: {
        orange: "#D87D4A",
        orangeLight: "#FBAF85",
        blacker: "#101010",
        black: "#000000",
        gray: "#f1f1f1",
        grayLight: "#fafafa",
        white: "#FFFFFF",
        red: "#CD2C2C",
      },
      borderColor: {
        gray: "#CFCFCF",
        orange: "#D87D4A",
        red: "#CD2C2C",
      },
    },
  },
  plugins: [],
};
export default config;
