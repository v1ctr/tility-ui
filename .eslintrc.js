module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-tility`
  extends: ["tility"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
