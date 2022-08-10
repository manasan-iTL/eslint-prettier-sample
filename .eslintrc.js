module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        // "plugin:react/recommended",
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        // "prettier/@typescript-eslint"
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json'],
    },
    plugins: [
        // "react",
        '@typescript-eslint',
    ],
    rules: {},
}
