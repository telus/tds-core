import React from 'react'
import { shallow, mount } from 'enzyme'
import Text from '@tds/core-text'
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
    it('will make price h2 sized', () => {
      const priceLockup = doShallow({ size: 'small' })
      expect(priceLockup.find('[data-testid="priceValue"]')).toHaveClassName('priceValueSignsmall')
    })
    it('will make rate text medium sized', () => {
      const priceLockup = doShallow({ size: 'small', rateText: '/month' })
      expect(priceLockup.find('[data-testid="rateText"]')).toHaveClassName('mediumText')
    })
    it('will make top text small sized', () => {
      const priceLockup = doShallow({ size: 'small', topText: 'top text' })
      expect(priceLockup).toContainReact(<Text size="small">top text</Text>)
    })
    it('will make dollar sign small sized', () => {
      const priceLockup = doShallow({ size: 'small', topText: 'top text' })
      expect(priceLockup.find('[data-testid="dollarSign"]')).toHaveClassName('mediumText')
    })
  })

  describe('size prop is medium', () => {
    it('will make price h2 sized', () => {
      const priceLockup = doShallow({ size: 'medium' })
      expect(priceLockup.find('[data-testid="priceValue"]')).toHaveClassName('priceValueSignmedium')
    })
    it('will make rate text medium sized', () => {
      const priceLockup = doShallow({ size: 'medium', rateText: '/month' })
      expect(priceLockup.find('[data-testid="rateText"]')).toHaveClassName('mediumText')
    })
    it('will make top text small sized', () => {
      const priceLockup = doShallow({ size: 'medium', topText: 'top text' })
      expect(priceLockup).toContainReact(<Text size="small">top text</Text>)
    })
    it('will make bottom text medium sized', () => {
      const priceLockup = doShallow({ size: 'medium', bottomText: 'bottom text' })
      expect(priceLockup).toContainReact(<Text size="medium">bottom text</Text>)
    })
    it('will make dollar sign large sized', () => {
      const priceLockup = doShallow({ size: 'medium' })
      expect(priceLockup.find('[data-testid="dollarSign"]')).toHaveClassName('largeText')
    })
  })

  describe('size prop is large', () => {
    it('will make DollarSign h1 sized', () => {
      const priceLockup = doShallow({ size: 'large' })
      expect(priceLockup.find('[data-testid="dollarSign"]')).toHaveClassName('headingText')
    })

    it('will make price h2 sized', () => {
      const priceLockup = doShallow({ size: 'large' })
      expect(priceLockup.find('[data-testid="priceValue"]')).toHaveClassName('priceValueSignlarge')
    })
    it('will make rate text large sized', () => {
      const priceLockup = doShallow({ size: 'large', rateText: '/month' })
      expect(priceLockup.find('[data-testid="rateText"]')).toHaveClassName('largeText')
    })
    it('will make top text large sized', () => {
      const priceLockup = doShallow({ size: 'large', topText: 'top text' })
      expect(priceLockup).toContainReact(<Text size="large">top text</Text>)
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
