const { resolve } = require('path')
const { outputPath } = require('./config')

const getVisualRegressionFolders = componentName => {
  const componentOutputPath = resolve(outputPath, 'components', componentName)

  return {
    baseline: resolve(componentOutputPath, 'baseline'),
    results: resolve(componentOutputPath, 'results'),
    diffs: resolve(componentOutputPath, 'diffs'),
  }
}

module.exports = {
  getVisualRegressionFolders,
}
