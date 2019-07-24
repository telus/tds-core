import React from 'react'
import { shallow, render } from 'enzyme'

import Theme from '../themeMarketing'

describe.skip('Theme', () => {
  const doShallow = (props = {}) => shallow(<Theme {...props} />)

  it('renders', () => {
    const theme = render(<Theme />)

    expect(theme).toMatchSnapshot()
  })

  it('does other things', () => {
    const theme = doShallow()

    expect(theme).toExist()
  })

  it('passes additional attributes to the element', () => {
    const theme = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(theme).toHaveProp('id', 'the-id')
    expect(theme).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const theme = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(theme).not.toHaveProp('className', 'my-custom-class')
    expect(theme).not.toHaveProp('style')
  })
})
