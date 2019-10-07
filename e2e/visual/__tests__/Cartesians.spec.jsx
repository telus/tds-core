/* eslint-disable no-console */
const fs = require('fs')
const { exec } = require('child_process')

const { ignoredPackagesE2E } = require('../../../config/constants')

let components = []
describe('visual tests for all components', () => {
  beforeAll(done => {
    exec('npx lerna ls --json', (error, stdout) => {
      const packages = JSON.parse(stdout)
      components = packages
        .map(p => {
          return { name: p.location.split('/').slice(-1)[0], packageName: p.name }
        })
        .filter(p => !ignoredPackagesE2E.includes(p.packageName))
      done()
    })
  })

  it('runs cartesian component tests for all components', () => {
    const missingCartesianComponents = []
    components.forEach(component => {
      const file = `./e2e/visual/components/Cartesian${component.name}.jsx`
      if (!fs.existsSync(file)) {
        console.log(`Missing cartesian component for ${component.packageName}`)
        missingCartesianComponents.push(component.packageName)
      }
    })

    expect(missingCartesianComponents.length).toEqual(0)
  })
})
