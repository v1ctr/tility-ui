const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "../../packages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{ts,tsx}",
    "./stories/*.{ts,tsx,mdx}",
    "./.storybook/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
    },
  },
  plugins: [],
};
