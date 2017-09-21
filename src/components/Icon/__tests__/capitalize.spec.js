import capitalize from '../capitalize'

describe.only('capitalize', () => {
  it('capitalizes a string', () => {
    const string = capitalize('test')

    expect(string).toBe('Test')
  })
})
