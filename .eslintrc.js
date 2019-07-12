const { strictEslint } = require('@umijs/fabric');

module.exports = {
  ...strictEslint,
  rules: { '@typescript-eslint/no-inferrable-types': 0, 'import/prefer-default-export': 0, 'linebreak-style': 0 },
  globals: {
    page: true,
  },
};
