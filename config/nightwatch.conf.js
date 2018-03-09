/* eslint-disable no-console */
const path = require('path')
const config = require('../e2e/config')

// console.log('CONFIG', config)
const GLOBALS_PATH = path.resolve('e2e/globals.js')
const REPORT_PATH = path.resolve('e2e/reports/')
const SPEC_PATH = path.resolve('e2e/tests/')
const PAGE_OBJECTS_PATH = path.resolve('e2e/page-objects')
const CUSTOM_COMMANDS = [
  path.resolve('e2e/tests/visual-regression/commands'),
  path.resolve('node_modules/nightwatch-accessibility/commands'),
]
const CUSTOM_ASSERTIONS = [
  path.resolve('e2e/tests/visual-regression/assertions'),
  path.resolve('node_modules/nightwatch-accessibility/assertions'),
]

const accessibilityTesting = process.env.accessibilityTesting || true
const visualTesting = process.env.visualTesting || true

module.exports = {
  src_folders: SPEC_PATH,
  globals_path: GLOBALS_PATH,
  page_objects_path: PAGE_OBJECTS_PATH,
  // page_objects_path: 'e2e/page-objects',
  output_folder: REPORT_PATH,
  custom_commands_path: CUSTOM_COMMANDS,
  custom_assertions_path: CUSTOM_ASSERTIONS,
  selenium: {
    start_process: false,
  },
  // disable_colors: true,
  test_workers: false,
  test_settings: {
    default: {
      launch_url: config.launchUrl,
      selenium_port: 9515,
      selenium_host: '127.0.0.1',
      default_path_prefix: '',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--no-sandbox', 'window-size=1280,3000'],
        },
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
      globals: {
        accessibilityTesting,
        visualTesting,
        waitForConditionTimeout: 30000,
        retryAssertionTimeout: 10000,
      },
      end_session_on_fail: false,
      skip_testcases_on_fail: false,
    },
    headless: {
      desiredCapabilities: {
        chromeOptions: {
          args: ['--no-sandbox', '--headless', 'window-size=1280,3000'],
        },
      },
    },
  },
}
