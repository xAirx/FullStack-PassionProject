/* module.exports = {
  root: true,
  extends: ['airbnb-base', 'plugin:eslint-plugin/recommended'],
  plugins: ['eslint-plugin'],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'script',
  },
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'object-shorthand': [2, 'always', {
      ignoreConstructors: false,
      avoidQuotes: false, // this is the override vs airbnb
    }],
    'max-len': [2, 120, {
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreComments: true,
    }],
    'consistent-return': 0,

    'prefer-destructuring': [2, { array: false, object: false }, { enforceForRenamedProperties: false }],
    'prefer-object-spread': 0, // until node 8 is required
    'prefer-rest-params': 0, // until node 6 is required
    'prefer-spread': 0, // until node 6 is required
    'function-call-argument-newline': 1, // TODO: enable
    'function-paren-newline': 0,
    'no-plusplus': 1,
    'no-param-reassign': 1,
    'no-unreachable-loop': 1, // TODO: enable
    'no-restricted-syntax': [2, {
      selector: 'ObjectPattern',
      message: 'Object destructuring is not compatible with Node v4',
    }],
    strict: [2, 'global'],
    'valid-jsdoc': [2, {
      requireReturn: false,
      requireParamDescription: false,
      requireReturnDescription: false,
    }],

    'eslint-plugin/consistent-output': 0,
    'eslint-plugin/require-meta-schema': 0,
    'eslint-plugin/require-meta-type': 0,
  },
  overrides: [
    {
      files: 'tests/**',
      rules: {
        'no-template-curly-in-string': 1,
      },
    },
    {
      files: 'markdown.config.js',
      rules: {
        'no-console': 0,
      },
    },
  ],
};
 */
