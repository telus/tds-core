/* eslint-disable */
const path = require('path')
const config = require('../e2e/config')

const GLOBALS_PATH = path.resolve('e2e/globals.js')
const REPORT_PATH = path.resolve('e2e/output/reports/')
const SPEC_PATH = path.resolve('e2e/tests/')
const CUSTOM_COMMANDS = [
  path.resolve('e2e/commands'),
  path.resolve('node_modules/nightwatch-accessibility/commands'),
]
const CUSTOM_ASSERTIONS = [
  path.resolve('e2e/assertions'),
  path.resolve('node_modules/nightwatch-accessibility/assertions'),
]

const accessibilityTesting = process.env.accessibilityTesting || false
const visualTesting = process.env.visualTesting || true

module.exports = {
  src_folders: SPEC_PATH,
  globals_path: GLOBALS_PATH,
  output_folder: REPORT_PATH,
  custom_commands_path: CUSTOM_COMMANDS,
  custom_assertions_path: CUSTOM_ASSERTIONS,
  selenium: {
    start_process: false,
  },
  test_settings: {
    default: {
      launch_url: config.launchUrl,
      selenium_host: 'ondemand.saucelabs.com',
      selenium_port: 80,
      username: process.env.SAUCELABS_USERNAME,
      access_key: process.env.SAUCELABS_ACCESS_KEY,
      silent: true,
      end_session_on_fail: false,
      skip_testcases_on_fail: false,
      desiredCapabilities: {
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
      globals: {
        accessibilityTesting: accessibilityTesting,
        visualTesting: visualTesting,
        waitForConditionTimeout: 30000,
      },
    },
    latestChrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        version: 'latest',
        platform: 'windows 10',
        screenResolution: '1280x960',
      },
    },
    latestFirefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        version: 'latest',
        platform: 'windows 10',
        screenResolution: '1280x960',
      },
    },
    latestSafari: {
      desiredCapabilities: {
        browserName: 'safari',
        version: 'latest',
        platform: 'osx 10.14',
        screenResolution: '1280x960',
      },
    },
    latestEdge: {
      desiredCapabilities: {
        browserName: 'microsoftedge',
        version: 'latest',
        platform: 'windows 10',
        screenResolution: '1280x960',
      },
    },
    edge17: {
      desiredCapabilities: {
        browserName: 'microsoftedge',
        version: '17',
        platform: 'windows 10',
        screenResolution: '1280x960',
      },
    },
    ie11: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        version: '11.103',
        platform: 'windows 10',
        screenResolution: '1280x960',
        avoidProxy: true,
      },
    },
    iphone: {
      desiredCapabilities: {
        browserName: 'iphone',
        version: 'latest',
      },
    },
    android: {
      desiredCapabilities: {
        browserName: 'android',
        version: 'latest',
      },
    },
  },
}
