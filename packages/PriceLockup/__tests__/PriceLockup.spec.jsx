import React from 'react'
import { shallow, mount } from 'enzyme'
import Text from '@tds/core-text'
import HairlineDivider from '@tds/core-hairline-divider'
import PriceLockup from '../PriceLockup'

const defaultProps = {
  signDirection: 'left',
  price: '25',
  rateText: '/month',
  bottomText: 'bottom text',
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
    })
    expect(priceLockup).not.toHaveProp('className', 'my-custom-class')
    expect(priceLockup).not.toHaveProp('style')
  })

  describe('size prop is small', () => {
    const priceLockup = doShallow({ size: 'small' })
    it('will make price h2 sized', () => {
      expect(priceLockup.html()).toContain('priceValueSignsmall')
    })
    it('will make rate text medium sized', () => {
      priceLockup.setProps({ rateText: '/month' })
      expect(priceLockup).toContainReact(<Text size="medium">/month</Text>)
    })
    it('will make top text small sized', () => {
      priceLockup.setProps({ topText: 'top text' })
      expect(priceLockup).toContainReact(<Text size="small">top text</Text>)
    })
  })

  describe('size prop is medium', () => {
    const priceLockup = doShallow({ size: 'medium' })
    it('will make price h2 sized', () => {
      expect(priceLockup.html()).toContain('priceValueSignmedium')
    })
    it('will make rate text medium sized', () => {
      priceLockup.setProps({ rateText: '/month' })
      expect(priceLockup).toContainReact(<Text size="medium">/month</Text>)
    })
    it('will make top text small sized', () => {
      priceLockup.setProps({ topText: 'top text' })
      expect(priceLockup).toContainReact(<Text size="small">top text</Text>)
    })
    it('will make bottom text medium sized', () => {
      priceLockup.setProps({ bottomText: 'bottom text' })
      expect(priceLockup).toContainReact(<Text size="medium">bottom text</Text>)
    })
  })

  describe('size prop is large', () => {
    const priceLockup = doShallow({ size: 'large' })
    it('will make DollarSign h1 sized', () => {
      expect(priceLockup.html()).toContain('dollarSignH1Style')
    })
    it('will make price h2 sized', () => {
      expect(priceLockup.html()).toContain('priceValueSignlarge')
    })
    it('will make rate text large sized', () => {
      priceLockup.setProps({ rateText: '/month' })
      expect(priceLockup).toContainReact(<Text size="large">/month</Text>)
    })
    it('will make top text large sized', () => {
      priceLockup.setProps({ topText: 'top text' })
      expect(priceLockup).toContainReact(<Text size="large">top text</Text>)
    })
  })

  describe('signDirection prop', () => {
    const priceLockup = doMount()
    it('is left, and dollar sign will be left of price', () => {
      priceLockup.setProps({ signDirection: 'left' })
      expect(priceLockup.text()).toEqual('$25/month')
    })
    it('is right, and dollar sign will be right of price', () => {
      priceLockup.setProps({ signDirection: 'right' })
      expect(priceLockup.text()).toEqual('25$/month')
    })
    it('is undefined, and dollar sign will be left of price', () => {
      priceLockup.setProps({ signDirection: undefined })
      expect(priceLockup.text()).toEqual('$25/month')
    })
  })

  describe('rateText prop', () => {
    const priceLockup = doShallow({ rateText: 'rate text' })
    it('when present and size prop is not large', () => {
      expect(priceLockup).toContainReact(<Text size="medium">rate text</Text>)
    })
    it('when present and size prop is large', () => {
      priceLockup.setProps({ size: 'large' })
      expect(priceLockup).toContainReact(<Text size="large">rate text</Text>)
    })
  })

  describe('DollarSign Component becomes medium sized when', () => {
    const priceLockup = doMount()
    it('size prop is small', () => {
      priceLockup.setProps({ size: 'small' })
      expect(priceLockup).toContainReact(<Text size="medium">$</Text>)
    })
    it('size prop is medium', () => {
      priceLockup.setProps({ size: 'medium' })
      expect(priceLockup).toContainReact(<Text size="large">$</Text>)
    })
  })

  describe('HairlineDivider present', () => {
    const priceLockup = doShallow({ size: 'medium' })
    it('when rateText, bottomText, and size prop is medium available', () => {
      expect(priceLockup).toContainReact(<HairlineDivider />)
    })
  })
})
