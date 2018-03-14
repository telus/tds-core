/* eslint-disable no-console, func-names, no-shadow */
const resemble = require('node-resemble-js')
const fs = require('fs')
const path = require('path')

const { tolerance } = require('../config')
const { getVisualRegressionFolders } = require('../utils')

const ensureBaselinePhotoExists = (baselinePath, resultPath) => {
  if (!fs.existsSync(baselinePath)) {
    console.log('WARNING: baseline photo does NOT exist.')
    console.log(`Creating baseline photo from result: ${baselinePath}`)

    fs.writeFileSync(baselinePath, fs.readFileSync(resultPath))
  }
}

exports.assertion = function(componentName, fileName) {
  const folders = getVisualRegressionFolders(componentName)

  const baselinePath = path.join(folders.baseline, fileName)
  const resultPath = path.join(folders.results, fileName)
  const diffPath = path.join(folders.diffs, fileName)

  this.message = 'Unexpected compareScreenshot error.'
  this.expected = tolerance

  this.command = function(callback) {
    ensureBaselinePhotoExists(baselinePath, resultPath)

    resemble.outputSettings({
      errorColor: {
        red: 225,
        green: 0,
        blue: 255,
      },
      errorType: 'movement',
      transparency: 0.1,
      largeImageThreshold: 1200,
    })

    resemble(baselinePath)
      .compareTo(resultPath)
      // .ignoreAntialiasing()
      // .ignoreColors()
      .onComplete(callback)

    return this
  }

  this.value = function value(result) {
    result
      .getDiffImage()
      .pack()
      .pipe(fs.createWriteStream(diffPath))
    return parseFloat(result.misMatchPercentage, 10)
  }

  this.pass = function pass(value) {
    const pass = value <= this.expected

    this.message = `Screenshots ${
      pass ? 'Matched' : 'Match Failed'
    } for ${fileName} with a tolerance of ${this.expected}%, actual was ${value}%.`

    return pass
  }
}
