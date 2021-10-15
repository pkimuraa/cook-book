module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'prettier/vue', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
  },
  overrides: [
    {
      files: ['*/_tests_/.{j,t}s?(x)', '*/tests/unit//.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
