import React from 'react'
import { shallow } from 'enzyme'

import PriceLockup from '../PriceLockup'

describe('PriceLockup', () => {
  const defaultProps = {
    price: '25',
  }
  const doShallow = (overrides = {}) => shallow(<PriceLockup {...defaultProps} {...overrides} />)
  it('renders', () => {
    const priceLockup = doShallow()

    expect(priceLockup).toMatchSnapshot()
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

  it('will render BottomText when size prop is medium', () => {
    const priceLockup = doShallow({ size: 'medium' })
    expect(priceLockup.text()).toContain('<BottomText />')
  })

  it('will not render BottomText when size prop is not medium', () => {
    const priceLockup = doShallow({ size: 'large' })
    expect(priceLockup.text()).not.toContain('<BottomText />')
  })
})
