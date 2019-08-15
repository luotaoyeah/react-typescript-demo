const { strictEslint } = require('@umijs/fabric');

module.exports = {
  ...strictEslint,
  rules: {
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/interface-name-prefix': [2, 'always'],
    '@typescript-eslint/array-type': [2, 'generic'],
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'import/no-unresolved': 0,
    'max-len': ['error', { code: 120 }],
  },
  globals: {
    page: true,
  },
};
