const path = require('path')

module.exports = {
  rootDir: path.resolve('packages'),
  roots: ['<rootDir>', path.resolve('docs/components'), path.resolve('shared')],
  moduleNameMapper: {
    '\\.modules.scss$': 'identity-obj-proxy',
    '^.+\\.(css|scss)$': path.resolve('config/jest/__mocks__/styleMock.js'),
  },
  setupFiles: [
    path.resolve('config/jest/setupEnzyme.js'),
    path.resolve('config/jest/setupGlobals.js'),
  ],
  setupTestFrameworkScriptFile: path.resolve('node_modules/jest-enzyme/lib/index.js'),
  testEnvironment: 'enzyme',
}
