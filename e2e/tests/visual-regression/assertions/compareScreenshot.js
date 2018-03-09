/* eslint-disable no-console, func-names, no-shadow */
const resemble = require('node-resemble-js')
const fs = require('fs')
const path = require('path')

exports.assertion = function(testName, fileName, tolerance = 3) {
  if (testName && fileName) {
    const file = `${fileName}`
    const screenshotPath = path.join(__dirname, '..')

    const baselineFolder = path.join(screenshotPath, testName, 'baseline')
    const resultFolder = path.join(screenshotPath, testName, 'results')
    const diffFolder = path.join(screenshotPath, testName, 'diffs')
    const baselinePath = path.join(baselineFolder, file)
    const resultPath = path.join(resultFolder, file)
    const diffPath = path.join(diffFolder, file)

    this.message = 'Unexpected compareScreenshot error.'
    this.expected = tolerance

    this.command = function(callback) {
      // create new baseline photo if none exists
      if (!fs.existsSync(baselinePath)) {
        // console.log(`Creating Baseline Folder from Result: ${baselineFolder}`)
        try {
          fs.mkdirSync(baselineFolder)
        } catch (err) {
          if (err.code !== 'EEXIST') throw err
        }
      }

      // create new diff folder if none exists
      if (!fs.existsSync(diffFolder)) {
        console.log(`Creating Baseline Folder from Result: ${diffFolder}`)
        try {
          fs.mkdirSync(diffFolder)
        } catch (err) {
          if (err.code !== 'EEXIST') throw err
        }
      }

      // create new baseline photo if none exists
      if (!fs.existsSync(baselinePath)) {
        console.log('WARNING: Baseline Photo does NOT exist.')
        console.log(`Creating Baseline Photo from Result: ${baselinePath}`)

        fs.writeFileSync(baselinePath, fs.readFileSync(resultPath))
      }

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
}
