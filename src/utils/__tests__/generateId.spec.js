import generateId from '../generateId'

describe('generateId', () => {
  it('picks the first non empty value', () => {
    const id = generateId(undefined, null, '', '1', 'two')

    expect(id.identity()).toEqual('1')
  })

  it('sanitizes values to be appropriate for HTML IDs', () => {
    const id = generateId('ID with CaPs and SpAcEs')

    expect(id.identity()).toEqual('id-with-caps-and-spaces')
  })

  it('can add postfixes', () => {
    const id = generateId('my-id')

    expect(id.postfix('a postfix')).toEqual('my-id_a-postfix')
  })
})
