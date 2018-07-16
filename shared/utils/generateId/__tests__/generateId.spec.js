import generateId from '../generateId'

describe('generateId', () => {
  it('picks the first non empty value', () => {
    const id = generateId(undefined, null, '', '1', 'two')

    expect(id.identity()).toEqual('1')
  })

  describe('sanitization', () => {
    it('lowercases all characters', () => {
      const id = generateId('ALLCAPS')

      expect(id.identity()).toEqual('allcaps')
    })

    it('handles numbers', () => {
      const id = generateId(1)

      expect(id.identity()).toEqual('1')
    })

    it('replaces spaces with dashes', () => {
      const id = generateId('an id with spaces')

      expect(id.identity()).toEqual('an-id-with-spaces')
    })

    it('only preserves characters and numbers', () => {
      const id = generateId('an id with invalid characters :"/*123')

      expect(id.identity()).toEqual('an-id-with-invalid-characters-123')
    })
  })

  it('can add postfixes', () => {
    const id = generateId('my-id')

    expect(id.postfix('a postfix')).toEqual('my-id_a-postfix')
  })
})
