import React from 'react'
import { shallow } from 'enzyme'

import PriceLockup from '../PriceLockup'

const defaultProps = {
  signDirection: 'left',
  price: '25',
}

describe('PriceLockup', () => {
  const defaultProps = {
    price: '25',
  }
  const doShallow = (overrides = {}) => shallow(<PriceLockup {...defaultProps} {...overrides} />)
  it('renders', () => {
    const priceLockup = doShallow({ price: '25' })

  it('renders with default props', () => {
    const priceLockup = doShallow()
    expect(priceLockup).toMatchSnapshot()
  })

  it('does not allow custom CSS', () => {
    const priceLockup = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
      price: '25',
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
