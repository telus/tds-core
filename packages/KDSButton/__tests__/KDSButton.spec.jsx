import React from 'react'
import { shallow, render } from 'enzyme'

import KDSButton from '../KDSButton'

describe('KDSButton', () => {
  const doShallow = (props = {}) => shallow(<KDSButton {...props} />)

  it('renders', () => {
    const kDSButton = render(<KDSButton />)

    expect(kDSButton).toMatchSnapshot()
  })

  it('does other things', () => {
    const kDSButton = doShallow()

    expect(kDSButton).toExist()
  })

  it('passes additional attributes to the element', () => {
    const kDSButton = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(kDSButton).toHaveProp('id', 'the-id')
    expect(kDSButton).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const kDSButton = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(kDSButton).not.toHaveProp('className', 'my-custom-class')
    expect(kDSButton).not.toHaveProp('style')
  })
})
