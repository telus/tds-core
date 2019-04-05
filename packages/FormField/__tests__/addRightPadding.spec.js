import addRightPadding from '../addRightPadding'

describe('icon positioning calculations to prevent text overlapping', () => {
  it('does not add padding when there are no visible icons', () => {
    const style = addRightPadding(0)

    expect(style).toBeUndefined()
  })

  it('adds padding for 1 icon', () => {
    const style = addRightPadding(1)

    expect(style).toEqual({ paddingRight: 'calc(16px + 2rem)' })
  })

  it('adds padding for 2 icons', () => {
    const style = addRightPadding(2)

    expect(style).toEqual({ paddingRight: 'calc(32px + 3rem)' })
  })
})
