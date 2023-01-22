module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest'
  },
  plugins: ['react', '@typescript-eslint', 'jest'],
  rules: {
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    'space-before-function-paren': 'off'
  }
}
