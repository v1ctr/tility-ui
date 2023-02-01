const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@tility-ui/button",
            replacement: path.resolve(
              __dirname,
              "../../../packages/atoms/button/"
            ),
          },
          {
            find: "@tility-ui/theme",
            replacement: path.resolve(__dirname, "../../../packages/theme/"),
          },
          {
            find: "@tility-ui/typography",
            replacement: path.resolve(
              __dirname,
              "../../../packages/typography/"
            ),
          },
          {
            find: "@tility-ui/slide-over",
            replacement: path.resolve(
              __dirname,
              "../../../packages/overlays/slide-over"
            ),
          },
          {
            find: "@tility-ui/header",
            replacement: path.resolve(
              __dirname,
              "../../../packages/molecules/header"
            ),
          },
          {
            find: "@tility-ui/input",
            replacement: path.resolve(
              __dirname,
              "../../../packages/atoms/input"
            ),
          },
        ],
      },
    };
  },
};
