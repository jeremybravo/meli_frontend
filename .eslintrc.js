module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  extends: 'plugin:prettier/recommended',
  rules: {
    'no-unused-vars': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  },
  plugins: ['react']
}
