/* eslint-disable no-console */
// Need to debug this? Set 'silent' to false under test_settings.default.
const path = require('path')
const config = require('../e2e/config')
const chromedriver = require('chromedriver')

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

const accessibilityTesting = process.env.accessibilityTesting || true
const visualTesting = process.env.visualTesting || true

module.exports = {
  src_folders: SPEC_PATH,
  globals_path: GLOBALS_PATH,
  output_folder: REPORT_PATH,
  custom_commands_path: CUSTOM_COMMANDS,
  custom_assertions_path: CUSTOM_ASSERTIONS,
  test_workers: false,
  webdriver: {
    start_process: true,
    server_path: chromedriver.path,
    port: 9515,
  },
  test_settings: {
    default: {
      silent: true,
      launch_url: config.launchUrl,
      default_path_prefix: '',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['no-sandbox', 'window-size=1280,3000'],
        },
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
      globals: {
        accessibilityTesting,
        visualTesting,
      },
    },
    headless: {
      desiredCapabilities: {
        chromeOptions: {
          args: ['no-sandbox', 'headless', 'window-size=1280,3000', 'force-device-scale-factor=1'],
        },
      },
    },
  },
}
