const resemble = require('node-resemble-js')
const fs = require('fs')
const path = require('path')

exports.assertion = function compare(name, tolerance = 7) {
  const filename = `${name}.png`
  const screenshotPath = path.join(__dirname, '..', 'screenshots')
  const baselinePath = path.join(screenshotPath, 'baseline', filename)
  const resultPath = path.join(screenshotPath, 'results', filename)
  const diffPath = path.join(screenshotPath, 'diffs', filename)

  this.message = 'Unexpected compareScreenshot error.'
  this.expected = tolerance

  this.command = function command(callback) {
    // create new baseline photo if none exists
    if (!fs.existsSync(baselinePath)) {
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
    const isMatching = value <= this.expected

    this.message = `Screenshots ${
      isMatching ? 'Matched' : 'Match Failed'
    } for ${name} with a tolerance of ${this.expected}%.`

    return isMatching
  }
}
