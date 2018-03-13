const envConfig = {
  development: {
    launchUrl: 'http://localhost:6060',
    healthCheckUrl: 'http://localhost:6060',
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

module.exports = envConfig[process.env.APP_ENV || 'development']
