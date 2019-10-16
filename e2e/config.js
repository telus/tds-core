const { resolve } = require('path')

const config = {
  outputPath: resolve(__dirname, 'output'),
  rootSelector: '#app',
  tolerance: 0, // percentage
}

const envConfig = {
  development: {
    launchUrl: 'http://localhost:3000',
    healthCheckUrl: 'http://localhost:3000',
  },
  staging: {
    launchUrl:
      'http://telus-design-system-docs.s3-website-us-east-1.amazonaws.com/staging/components/index.html',
    healthCheckUrl:
      'http://telus-design-system-docs.s3-website-us-east-1.amazonaws.com/staging/components/index.html',
  },
  production: {
    launchUrl: 'http://tds.telus.com/components/index.html',
    healthCheckUrl: 'http://tds.telus.com/components/index.html',
  },
}

module.exports = Object.assign(config, envConfig[process.env.APP_ENV || 'development'])
