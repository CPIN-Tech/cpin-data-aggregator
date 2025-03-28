export default {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  env: {
    commonjs: true,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    indent: 'off',
    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        //ignoreIIFE: true,
        ignoreVoid: true,
      },
    ],
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '_',
        varsIgnorePattern: '_-used',
      },
    ],
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    //'@typescript-eslint/no-unsafe-member-access': 'off',
  },
};
