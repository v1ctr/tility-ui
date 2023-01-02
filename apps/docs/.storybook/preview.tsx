import "./style.css";

export const parameters = {
  darkMode: {
    stylePreview: true,
    classTarget: "html",
    darkClass: "dark",
    lightClass: "light",
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
