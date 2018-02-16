import joinClassNames from '../joinClassNames'

describe('joinClassNames', () => {
  it('joins class names with a space in between', () => {
    const classes = joinClassNames('class-1', 'class-2')

    expect(classes).toEqual('class-1 class-2')
  })

  it('removes empties', () => {
    const classes = joinClassNames('class-1', '', undefined, false, null, 'class-2')

    expect(classes).toEqual('class-1 class-2')
  })
})
