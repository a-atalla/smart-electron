const path = require('path');

module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, 'webpack.config.js')
      }
    }
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': 'off',
  }
};
