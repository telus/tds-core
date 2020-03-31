import { exec } from 'child_process'

import getPackageNames from '../getPackageNames'

describe('getPackageNames', () => {
  it('handles a single package name', done => {
    const argv = ['bin/node', 'tds-core/scripts/e2e.js', '@tds/core-button', '-n', 'branch-name']
    getPackageNames(argv, packageNames => {
      expect(packageNames).toEqual(['@tds/core-button'])
      done()
    })
  })

  it('handles multiple package names', done => {
    const argv = [
      'bin/node',
      'tds-core/scripts/e2e.js',
      '@tds/core-button',
      '@tds/core-button-link',
      '-n',
      'branch-name',
    ]
    getPackageNames(argv, packageNames => {
      expect(packageNames).toEqual(['@tds/core-button', '@tds/core-button-link'])
      done()
    })
  })

  it('handles --all', done => {
    const argv = ['bin/node', 'tds-core/scripts/e2e.js', '--all', '-n', 'branch-name']
    getPackageNames(argv, packageNames => {
      exec('npx lerna ls', (error, stdout) => {
        const lernaLS = stdout.trim().split('\n')
        expect(packageNames).toEqual(lernaLS)
        done()
      })
    })
  })
})
