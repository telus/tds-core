import getCopy from '../getCopy'

describe('getCopy', () => {
  it('returns the copy from the dictionary for a given language', () => {
    const copy = getCopy({ en: { hello: 'Hello' }, fr: { hello: 'Bonjour' } }, 'fr')
    expect(copy).toEqual({ hello: 'Bonjour' })
  })

  it('returns the copy exactly as is if the copy prop is an object', () => {
    const copy = getCopy({}, { hello: 'Hello' })
    expect(copy).toEqual({ hello: 'Hello' })
  })

  it('returns an empty object if no copy prop is provided', () => {
    const copy = getCopy({})
    expect(copy).toEqual({})
    const copy2 = getCopy({}, null)
    expect(copy2).toEqual({})
  })
})
