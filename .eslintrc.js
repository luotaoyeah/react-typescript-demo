const { strictEslint } = require('@umijs/fabric');

module.exports = {
  ...strictEslint,
  rules: {
    '@typescript-eslint/array-type': [2, 'generic'],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/interface-name-prefix': [2, 'always'],
    '@typescript-eslint/no-inferrable-types': 0,
    'react/jsx-boolean-value': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'jsx-a11y/alt-text': 0,
    'linebreak-style': 0,
    'no-console': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'max-len': ['error', { code: 120 }],
  },
  globals: {
    page: true,
  },
};
