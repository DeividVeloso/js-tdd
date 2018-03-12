module.exports = {
  "extends": "airbnb",
  "plugins": [
    "mocha"
  ],
  "rules": {
    "mocha/no-exclusive-tests": "error",
    "no-unused-expressions": "off",
    'comma-dangle': 'off',
    'class-methods-use-this': 'off'
  },
  "env": {
    "mocha": true
  }
};
