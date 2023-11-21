/* eslint-env node */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: ['plugin:prettier/recommended', 'airbnb', 'airbnb-typescript', 'airbnb/hooks'],
  rules: {
    'no-console': 2,
    'react/react-in-jsx-scope': 'off',
  },
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
