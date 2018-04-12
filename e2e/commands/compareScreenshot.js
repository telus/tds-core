/* eslint-disable no-console */

const { resolve } = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')

const { rootSelector } = require('../config')
const { getVisualRegressionFolders } = require('../utils')

const ensureFolderExists = (path, folderName) => {
  if (!fs.existsSync(path)) {
    console.log(`Creating ${folderName} folder: ${path}`)

    try {
      mkdirp.sync(path)
    } catch (err) {
      if (err.code !== 'EEXIST') throw err
    }
  }
}

const resizeWindow = browser => {
  return browser.element('css selector', 'html', element => {
    browser.elementIdSize(element.value.ELEMENT, pageSize => {
      const width = pageSize.value.width
      const height = pageSize.value.height

      // add a pause to ensure any process / event is finished processing
      browser.resizeWindow(width, height)
      browser.pause(500)
    })
  })
}

const takeScreenshot = (resultPath, browser, selector, callback) => {
  return browser.element('css selector', selector, element => {
    browser.saveScreenshot(resultPath, () => {
      callback.call(browser, element)
    })
  })
}

exports.command = function compareScreenshot(componentName, browserName, browserVersion) {
  const fileName = `${browserName}_${browserVersion}.png`
  const folders = getVisualRegressionFolders(componentName)
  const resultScreenshotPath = resolve(folders.results, fileName)

  ensureFolderExists(folders.baseline, 'baseline')
  ensureFolderExists(folders.results, 'result')
  ensureFolderExists(folders.diffs, 'diff')

  resizeWindow(this)

  takeScreenshot(resultScreenshotPath, this, rootSelector, () => {
    this.verify.compareScreenshot(componentName, fileName)
  })

  return this
}
