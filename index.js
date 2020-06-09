module.exports = {
  parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        node: true,
        browser: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended'
    ],
    plugins: [
        'react-hooks'
    ],
    rules: {
       'react/react-in-jsx-scope': 'off',
       'react-hooks/rules-of-hooks': 'error',
       'react-hooks/exhaustive-deps': 'warn'
    }
};
