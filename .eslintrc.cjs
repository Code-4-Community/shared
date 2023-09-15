/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier'],
  root: true,
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
    'react/no-unescaped-entities': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
