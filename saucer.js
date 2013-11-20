module.exports = {
  sauceUser: '',
  sauceKey: '',
  capabilities: {
    browserName: 'internet explorer',
    platform: 'Windows 7',
    version: '9'
  },
  specs: ['tests/main.spec.js'],
};