/*
 * TODO: remove babel-core, babel-preset-env, babel-preset-react,
 * babel-preset-stage-2,and babelrc once jest no longer requires babel 6.
 */
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
  setupFilesAfterEnv: [
    path.resolve('node_modules/jest-enzyme/lib/index.js'),
    path.resolve('node_modules/jest-styled-components/src/index.js'),
  ],
  testEnvironment: 'enzyme',
}
