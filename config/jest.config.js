const path = require('path')

module.exports = {
  rootDir: path.resolve('src'),
  roots: ['<rootDir>', path.resolve('docs/components')],
  moduleNameMapper: {
    '\\.modules.scss$': 'identity-obj-proxy',
    '^.+\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^.+\\.(svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFiles: [
    '<rootDir>/__mocks__/requestAnimationFrame.js',
    path.resolve('config/jest/setupEnzyme.js'),
  ],
  setupTestFrameworkScriptFile: path.resolve('node_modules/jest-enzyme/lib/index.js'),
  snapshotSerializers: ['enzyme-to-json/serializer'],
}
