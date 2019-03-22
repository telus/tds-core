import React from 'react'
import { shallow, render } from 'enzyme'

import BenefitWithHeading from '../BenefitWithHeading'

describe.skip('BenefitWithHeading', () => {
  const doShallow = (props = {}) => shallow(<BenefitWithHeading {...props} />)

  it('renders', () => {
    const benefit = render(<BenefitWithHeading />)

    expect(benefit).toMatchSnapshot()
  })

  it('does other things', () => {
    const benefit = doShallow()

    expect(benefit).toExist()
  })

  it('renders an HTML ul tag', () => {
    const benefit = doShallow()

    expect(benefit.dive()).toHaveDisplayName('ul')
  })

  it.skip('list items render an HTML li tag', () => {
    const benefitItem = doShallow(<BenefitWithHeading.Item>Some content</BenefitWithHeading.Item>)

    expect(benefitItem).toHaveDisplayName('li')
  })

  it('passes additional attributes to the element', () => {
    const benefit = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(benefit).toHaveProp('id', 'the-id')
    expect(benefit).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const benefit = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(benefit).not.toHaveProp('className', 'my-custom-class')
    expect(benefit).not.toHaveProp('style')
  })
})
