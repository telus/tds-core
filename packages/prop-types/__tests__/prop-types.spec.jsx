import * as PropTypes from '../prop-types'

describe('prop-types', () => {
  it('exports componentWithName', () => {
    expect(PropTypes.componentWithName).toEqual(expect.any(Function))
  })

  it('exports responsiveProps', () => {
    expect(PropTypes.responsiveProps).toEqual(expect.any(Function))
  })

  it('exports or', () => {
    expect(PropTypes.or).toEqual(expect.any(Function))
  })
})
