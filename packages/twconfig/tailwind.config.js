const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "../../packages/atoms/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
