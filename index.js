// @ts-check

/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  plugins: ['import'],
  extends: [
    // eslint
    'eslint:recommended',
    // import
    'plugin:import/recommended'
  ],
  parserOptions: {
    // al giorno d'oggi nessuno scrive codice js con type="script"
    // quindi lint lo scrive in automatico
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
    es2020: true
  },
  rules: {
    'no-var': 2,
    'func-style': [2, 'declaration', { allowArrowFunctions: true }],
    'no-unused-vars': [
      2,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        caughtErrors: 'all'
      }
    ],
    'prefer-const': 2,
    semi: [2, 'always'],
    strict: [2, 'global'],
    'import/no-default-export': 2,
    'import/order': [2, { alphabetize: { order: 'asc' } }]
  }
}
