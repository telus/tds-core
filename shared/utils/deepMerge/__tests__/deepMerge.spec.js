import deepMerge from '../deepMerge'

describe('deepMerge', () => {
  it('deeply merges two objects', () => {
    const colour = {
      color: 'red',
      '> *:not(:last-child)': {
        color: 'blue',
      },
    }

    const fontWeight = {
      fontWeight: 400,
      '> *:not(:last-child)': {
        fontWeight: 700,
      },
    }

    const merged = deepMerge(colour, fontWeight)
    expect(merged).toEqual({
      color: 'red',
      fontWeight: 400,
      '> *:not(:last-child)': {
        color: 'blue',
        fontWeight: 700,
      },
    })
  })
})
