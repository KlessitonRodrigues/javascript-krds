module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': ['error'],
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'class-methods-use-this': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'consistent-return': 'off',
        'no-console': 'off',
    },
}
