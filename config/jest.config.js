const path = require('path')

module.exports = {
  rootDir: path.resolve('src'),
  moduleNameMapper: {
    '\\.modules.scss$': 'identity-obj-proxy',
    '^.+\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js'
  },
  setupTestFrameworkScriptFile: path.resolve('node_modules/jest-enzyme/lib/index.js')
}
