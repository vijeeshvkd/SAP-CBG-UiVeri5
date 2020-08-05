exports.config = {
    profile: 'integration',
    browsers: [{
        browserName: 'chrome',
        capabilities: {
          seleniumOptions: {
            args: ['-debug', '-log','selenium.log'],
            seleniumLoopback: true
          },
          remoteWebDriverOptions: {
            maximized: true
          },
          chromeOptions: {
            args: [
              'disable-infobars',
              'ignore-certificate-errors',
              'test-type',
              'allow-insecure-localhost'
            ],
            w3c: false
          },
          'goog:chromeOptions': {
            w3c: false
          }
        }
      }],
    baseUrl: 'http://localhost:3000',
    connectionConfigs: {
      direct: {
          binaries: {
              chromedriver: {
                  version: "83.0.4103.14"
              }
          }
      }
   },
   timeouts: {
      getPageTimeout: '100000',
      allScriptsTimeout: '110000',
      defaultTimeoutInterval: '300000'
    }
}