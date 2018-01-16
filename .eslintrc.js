module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],

  // add your custom rules here
  rules: {
    'arrow-spacing': 'error',
    'generator-star-spacing': 'error',
    'yield-star-spacing': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': 'error',
    'template-curly-spacing': 'error',
    'no-unmodified-loop-condition': 'error',
    indent: ['error', 2],
    semi: 'error',
    eqeqeq: 'error',
    'no-console': 'warn',
    'prefer-arrow-callback': 'warn'
  },
  globals: {
    Vue: true
  }
}
