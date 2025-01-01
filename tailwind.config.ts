import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors');

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#1A202C", // Example primary color
        gray: "#5E0B0B", // Blood-red color for bg-blood
        blood: "#5E0B0B", // Blood-red color for bg-blood
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};

export default config;
