import React from 'react'
import { shallow } from 'enzyme'

import PriceLockup from '../PriceLockup'

describe('PriceLockup', () => {
  const doShallow = (props = {}) => shallow(<PriceLockup {...props} />)

  it('renders', () => {
    const priceLockup = doShallow()

    expect(priceLockup).toMatchSnapshot()
  })

  it('does other things', () => {
    const priceLockup = doShallow()

    expect(priceLockup).toExist()
  })

  it('passes additional attributes to the element', () => {
    const priceLockup = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(priceLockup).toHaveProp('id', 'the-id')
    expect(priceLockup).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const priceLockup = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(priceLockup).not.toHaveProp('className', 'my-custom-class')
    expect(priceLockup).not.toHaveProp('style')
  })
})
