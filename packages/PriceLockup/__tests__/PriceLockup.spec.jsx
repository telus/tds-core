import React from 'react'
import { shallow, mount, render } from 'enzyme'
import HairlineDivider from '@tds/core-hairline-divider'
import PriceLockup from '../PriceLockup'

const defaultProps = {
  signDirection: 'left',
  price: '25',
  size: 'small',
  rateText: '/month',
}

describe('PriceLockup', () => {
  const doShallow = (props = {}) => shallow(<PriceLockup {...defaultProps} {...props} />)
  const doMount = (props = {}) => mount(<PriceLockup {...defaultProps} {...props} />)
  const doRender = (props = {}) => render(<PriceLockup {...defaultProps} {...props} />)

  it('renders with default props', () => {
    const priceLockup = render(
      <PriceLockup signDirection="left" price="25" size="small" rateText="/month" />
    )
    expect(priceLockup).toMatchSnapshot()
  })

  it('does not allow custom CSS', () => {
    const priceLockup = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })
    expect(priceLockup).not.toHaveProp('className', 'my-custom-class')
    expect(priceLockup).not.toHaveProp('style')
  })

  describe('size prop is small', () => {
    it('renders', () => {
      const priceLockup = doRender({
        size: 'small',
        topText: 'top text',
        bottomText: 'bottom text',
      })
      expect(priceLockup).toMatchSnapshot()
    })
  })

  describe('size prop is medium', () => {
    it('renders', () => {
      const priceLockup = doRender({
        size: 'medium',
        topText: 'top text',
        bottomText: 'bottom text',
      })
      expect(priceLockup).toMatchSnapshot()
    })
  })

  describe('size prop is large', () => {
    it('renders', () => {
      const priceLockup = doRender({ size: 'large', topText: 'top text' })
      expect(priceLockup).toMatchSnapshot()
    })
  })

  describe('Dollar Sign', () => {
    it('appears on left side of price when specified', () => {
      const priceLockup = doMount({ signDirection: 'left' })
      expect(priceLockup.text()).toEqual('$25/month')
    })

    it('appears on left side of price by default', () => {
      const priceLockup = doMount({ signDirection: undefined })
      expect(priceLockup.text()).toEqual('$25/month')
    })
    it('appears on the right side of the price when specified', () => {
      const priceLockup = doMount({ signDirection: 'right' })
      expect(priceLockup.text()).toEqual('25$/month')
    })
  })

  describe('HairlineDivider present', () => {
    const priceLockup = doShallow({ size: 'medium', bottomText: 'text' })
    it('when rateText, bottomText, and size prop is medium available', () => {
      expect(priceLockup.find(HairlineDivider)).toExist()
    })
  })
})
