module.exports = {
    root: true,
    'env': {
        node: true,
        es6: true,
    },
    'parserOptions': {
        'ecmaVersion': 2020,
        'sourceType': 'module',
        parser:'babel-eslint',
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
