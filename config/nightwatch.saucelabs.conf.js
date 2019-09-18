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

// Defaults
// SL
var chrome = 'chrome'
var safari = 'safari'
var firefox = 'firefox'
var firefoxShort = 'ff'
var ie = 'internet explorer'
var ieShort = 'ie'
var edge = 'microsoftedge'
var edgeShort = 'edge'

var defaultBrowserVersion = 'latest'
var defaultWindows = 'windows 10'
var defaultOSX = 'mac 10.12'

var browserName = process.env.browserName || chrome
if (browserName == firefoxShort) {
  browserName = firefox
} else if (browserName == ieShort) {
  browserName = ie
} else if (browserName == edgeShort) {
  browserName = edge
}
var browserVersion = process.env.browserVersion || defaultBrowserVersion
var platform
if (process.env.platform != null) {
  platform = process.env.platform
} else if (process.env.os == null || process.env.osVersion == null) {
  if (browserName == safari) {
    platform = defaultOSX
  } else {
    platform = defaultWindows
  }
} else {
  platform = process.env.os + ' ' + process.env.osVersion
}

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
      launch_url: 'http://local.telus.com:3000',
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
        screenResolution: '2560x1600',
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
      },
    },
    latestFirefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        version: 'latest',
        platform: 'windows 8',
      },
    },
    latestSafari: {
      desiredCapabilities: {
        browserName: 'safari',
        version: 'latest',
        platform: 'osx 10.12',
        screenResolution: '2360x1770',
      },
    },
    latestEdge: {
      desiredCapabilities: {
        browserName: 'microsoftedge',
        version: 'latest',
        platform: 'windows 10',
      },
    },
    edge17: {
      desiredCapabilities: {
        browserName: 'microsoftedge',
        version: '17',
        platform: 'windows 10',
      },
    },
    ie11: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        version: '11.103',
        platform: 'windows 10',
        avoidProxy: true,
      },
    },
    custom: {
      desiredCapabilities: {
        browserName: browserName,
        version: browserVersion,
        platform: platform,
      },
    },
  },
}
