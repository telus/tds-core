/* eslint-disable no-console, func-names, no-shadow */
const resemble = require('node-resemble-js')
const fs = require('fs')
const path = require('path')
const readline = require('readline')
const { spawnSync } = require('child_process')

const { tolerance } = require('../config')
const { getVisualRegressionFolders } = require('../utils')

const ensureBaselinePhotoExists = (baselinePath, resultPath) => {
  if (!fs.existsSync(baselinePath)) {
    console.log('WARNING: baseline photo does NOT exist.')
    console.log(`Creating baseline photo from result: ${baselinePath}`)

    fs.writeFileSync(baselinePath, fs.readFileSync(resultPath))
  }
}

const update = (baselinePath, resultPath, callback, data) => {
  const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  read.question('Would you like to update the baseline for this screenshot? (y/n) ', answer => {
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      console.log('Generating new baseline screenshot...')
      spawnSync('rm', [baselinePath], {
        stdio: 'inherit',
      })
      fs.writeFileSync(baselinePath, fs.readFileSync(resultPath))
    }
    read.close()
    callback(data)
  })
  return 'User was prompted to update screenshot.'
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
      .onComplete(data => {
        if (Number(data.misMatchPercentage) > 0.01 && process.env.UPDATE_SCREENSHOTS === 'true') {
          this.message = update(baselinePath, resultPath, callback, data)
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
    const pass = value <= this.expected

    if (process.env.UPDATE_SCREENSHOTS === 'false' || pass) {
      this.message = `Screenshots ${
        pass ? 'Matched' : 'Match Failed'
      } for ${fileName} with a tolerance of ${this.expected}%, actual was ${value}%.`
    }

    return pass
  }
}
