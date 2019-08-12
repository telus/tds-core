import uniqueId from '../uniqueId'

describe('uniqueId', () => {
  it('generates a unique id', () => {
    const id = uniqueId('tooltip')
    expect(id).toEqual('tooltip1')
    const id2 = uniqueId('tooltip')
    expect(id2).toEqual('tooltip2')
  })
})
