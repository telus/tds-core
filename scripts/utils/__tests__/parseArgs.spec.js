import parseArgs from '../parseArgs'

describe('parseArgs', () => {
  it('test:e2e', () => {
    const argv = ['bin/node', 'tds-core/scripts/e2e.js', '@tds/core-button', '-n', 'branch-name']
    const { userPackageNames, tdsOptions, lernaOptions } = parseArgs(argv)

    expect(tdsOptions).toEqual({
      n: 'branch-name',
      name: 'branch-name',
    })
    expect(userPackageNames).toEqual(['@tds/core-button'])
    expect(lernaOptions).toEqual([])
  })

  it('publish.js', () => {
    const argv = ['bin/node', 'node scripts/publish.js', '--conventional-commits', '--yes']

    const { userPackageNames, tdsOptions, lernaOptions } = parseArgs(argv)

    expect(tdsOptions).toEqual({})
    expect(userPackageNames).toEqual([])
    expect(lernaOptions).toEqual(['--conventional-commits', '--yes'])
  })

  it('e2e test --all', () => {
    const argv = ['bin/node', 'tds-core/scripts/e2e.js', '--all', '-n', 'branch-name']
    const { userPackageNames, tdsOptions, lernaOptions } = parseArgs(argv)

    expect(tdsOptions).toEqual({
      n: 'branch-name',
      name: 'branch-name',
      a: true,
      all: true,
    })
    expect(userPackageNames).toEqual([])
    expect(lernaOptions).toEqual([])
  })
})
