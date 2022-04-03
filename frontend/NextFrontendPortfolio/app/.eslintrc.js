module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'unused-imports',
    'jsx-a11y',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/@typescript-eslint',
    // Prettier
    'react-app',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never' },
    ],

    // #region  //*=========== Unused Import ===========
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    // #endregion  //*======== Unused Import ===========

    // #region  //*=========== Import Sort ===========
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // ext library & side effect imports
          ['^@?\\w', '^\\u0000'],
          // {s}css files
          ['^.+\\.s?css$'],
          // Lib and hooks
          ['^@/lib', '^@/hooks'],
          // static data
          ['^@/data'],
          // components
          ['^@/components', '^@/container'],
          // zustand store
          ['^@/store'],
          // Other imports
          ['^@/'],
          // relative paths up until 3 level
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)',
          ],
          ['^@/types'],
          // other that didnt fit in
          ['^'],
        ],
      },
    ],
    // #endregion  //*======== Import Sort ===========
    endOfLine: 'off',
    indent: ['error', 2, { MemberExpression: 1 }],
    'comma-dangle': [0, 'always-multiline'],
    'object-shorthand': [
      2,
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: false, // this is the override vs airbnb
      },
    ],
    'max-len': [
      2,
      120,
      {
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'consistent-return': 0,

    'prefer-destructuring': [
      2,
      { array: false, object: false },
      { enforceForRenamedProperties: false },
    ],
    'prefer-object-spread': 2, // until node 8 is required
    'prefer-rest-params': 2, // until node 6 is required
    'prefer-spread': 2, // until node 6 is required
    'function-call-argument-newline': 1, // TODO: enable
    'function-paren-newline': 0,
    'no-plusplus': 1,
    'no-param-reassign': 1,
    'no-unreachable-loop': 1, // TODO: enable
    'no-restricted-syntax': [
      2,
      {
        selector: 'ObjectPattern',
        message: 'Object destructuring is not compatible with Node v4',
      },
    ],
    strict: [0, 'safe'],
    'valid-jsdoc': [
      2,
      {
        requireReturn: false,
        requireParamDescription: false,
        requireReturnDescription: false,
      },
    ],

    'eslint-plugin/consistent-output': 0,
    'eslint-plugin/require-meta-schema': 0,
    'eslint-plugin/require-meta-type': 0,
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
