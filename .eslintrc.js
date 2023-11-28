module.exports = {
  root: true,
  'env': {
    node: true,
    es6: true,
  },
  'parserOptions': {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  "parser": "vue-eslint-parser",
  'plugins': [
    'vue',
  ],
  'rules': {},
};
