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
      },
      backgroundColor: {
        orange: "#D87D4A",
        orangeLight: "#FBAF85",
        blacker: "#101010",
        black: "#000000",
        gray: "#f1f1f1",
        grayLight: "#fafafa",
        white: "#FFFFFF",
      },
      borderColor: {
        gray: "#CFCFCF",
        orange: "#D87D4A",
      },
    },
  },
  plugins: [],
};
export default config;
