/* eslint-env node */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@stylistic"],
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": 0,
    "@typescript-eslint/explicit-function-return-type": 2,
    curly: [2, "all"],
    "no-plusplus": [
      2,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    complexity: [1, 20],
    "@typescript-eslint/promise-function-async": 2,
    "@stylistic/quotes": [2, "double"],
    "@stylistic/max-len": [
      1,
      {
        code: 100,
        ignoreUrls: true,
      },
    ],
    "@stylistic/indent": [1, 2],
    "@stylistic/no-tabs": 1,
    "@stylistic/linebreak-style": [1, "windows"],
  },
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};
