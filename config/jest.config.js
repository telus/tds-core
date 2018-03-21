const path = require('path')

module.exports = {
  rootDir: path.resolve('packages'),
  roots: ['<rootDir>', path.resolve('docs/components'), path.resolve('shared')],
  moduleNameMapper: {
    '\\.modules.scss$': 'identity-obj-proxy',
    '^.+\\.(css|scss)$': path.resolve('config/jest/__mocks__/styleMock.js'),
    '^.+\\.(svg)$': path.resolve('config/jest/__mocks__/fileMock.js'),
  },
  setupFiles: [
    path.resolve('config/jest/__mocks__/requestAnimationFrame.js'),
    path.resolve('config/jest/setupEnzyme.js'),
    path.resolve('config/jest/setupGlobals.js'),
  ],
  setupTestFrameworkScriptFile: path.resolve('node_modules/jest-enzyme/lib/index.js'),
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'enzyme',
}
