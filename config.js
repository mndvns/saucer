module.exports = {
  protractor: {
    chromeDriver: './selenium/chromedriver',
    seleniumArgs: [],
    baseUrl: '',
    jasmineNodeOpts: {
      onComplete: null,
      isVerbose: true,
      showColors: true,
      includeStackTrace: true,
      defaultTimeoutInterval: 10000
    }
  },
  sauce: {
    logfile: 'sauce_connect.log',
    tunnelIdentifier: '',
    fastFailRexegps: '',
    directDomains: '',
    verbose: false
  },
  log : {
    colors: {
      info: 'grey',
      debug: 'green',
      warning: 'yellow',
      error: 'red',
      notice: 'white'
    },
    width: 11,
    padding: 1
  }
}
