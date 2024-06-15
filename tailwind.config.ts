import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
    },
  },
  plugins: [],
};
export default config;
