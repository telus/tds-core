/* eslint-disable no-console, func-names, no-shadow */
const resemble = require('node-resemble-js')
const fs = require('fs')
const path = require('path')

const { tolerance } = require('../config')
const { getVisualRegressionFolders } = require('../utils')

const updateAllScreenshots = process.env.UPDATE_ALL_SCREENSHOTS === 'true'

const ensureBaselinePhotoExists = (baselinePath, resultPath) => {
  if (!fs.existsSync(baselinePath)) {
    console.log('WARNING: baseline photo does NOT exist.')
    console.log(`Creating baseline photo from result: ${baselinePath}`)

    fs.writeFileSync(baselinePath, fs.readFileSync(resultPath))
  }
}

const update = (baselinePath, resultPath, callback, data) => {
  if (updateAllScreenshots) {
    console.log('Generating new baseline screenshot...')
    fs.writeFileSync(baselinePath, fs.readFileSync(resultPath))
    callback(data)
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
      .onComplete(data => {
        if (Number(data.misMatchPercentage) > tolerance && updateAllScreenshots) {
          update(baselinePath, resultPath, callback, data)
        } else {
          callback(data)
        }
      })
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
    let pass = value <= this.expected

    if (!updateAllScreenshots || pass) {
      this.message = `Screenshots ${
        pass ? 'Matched' : 'Match Failed'
      } for ${fileName} with a tolerance of ${this.expected}%, actual was ${value}%.`
    } else if (updateAllScreenshots) {
      this.message = 'Initial screenshot match failed, but baseline screenshot was updated.'
      pass = true
    }

    return pass
  }
}
