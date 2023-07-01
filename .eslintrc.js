module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  ignorePatterns: [".eslintrc.js"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
        project: ["./tsconfig.json"],
      },
    },
  ],
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
