const env = process.env.APP_ENV || 'development'

// eslint-disable-next-line import/no-dynamic-require
const envConfig = require(`./${env}`)

module.exports = envConfig
