const path = require('path')

module.exports = {
  src_folders: path.resolve('functional-tests/specs/'),
  globals_path: path.resolve('functional-tests/globals.js'),
  output_folder: path.resolve('functional-tests/reports'),
  custom_commands_path: [
    path.resolve('functional-tests/commands'),
    path.resolve('node_modules/nightwatch-accessibility/commands'),
  ],
  custom_assertions_path: [
    path.resolve('functional-tests/assertions'),
    path.resolve('node_modules/nightwatch-accessibility/assertions'),
  ],
  page_objects_path: path.resolve('functional-tests/page-objects'),
  selenium: {
    start_process: false,
  },
  test_settings: {
    default: {
      launch_url: 'http://127.0.0.1',
      selenium_port: 9515,
      selenium_host: '127.0.0.1',
      default_path_prefix: '',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--no-sandbox', 'window-size=1280,800'],
        },
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
      globals: {
        waitForConditionTimeout: 30000,
      },
      end_session_on_fail: false,
      skip_testcases_on_fail: false,
    },
    headless: {
      desiredCapabilities: {
        chromeOptions: {
          args: ['--no-sandbox', '--headless', 'window-size=1280,800'],
        },
      },
    },
  },
}
