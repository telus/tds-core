/* eslint-disable */
const path = require('path')

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
      launch_url: process.env.URL,
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
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        version: '78',
        platform: 'windows 10',
        screenResolution: '2560x1600',
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        version: '80',
        platform: 'windows 10',
        screenResolution: '2560x1600',
      },
    },
    safari: {
      desiredCapabilities: {
        browserName: 'safari',
        version: '12',
        platform: 'osx 10.14',
        screenResolution: '2360x1770',
      },
    },
    edge: {
      desiredCapabilities: {
        browserName: 'microsoftedge',
        version: '18',
        platform: 'windows 10',
        screenResolution: '2560x1600',
      },
    },
    edge17: {
      desiredCapabilities: {
        browserName: 'microsoftedge',
        version: '17',
        platform: 'windows 10',
        screenResolution: '2560x1600',
      },
    },
    ie11: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        browserVersion: '11.285.17134.0',
        seleniumVersion: '3.141.59',
        iedriverVersion: '3.141.59',
        platform: 'windows 10',
        screenResolution: '2560x1600',
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
