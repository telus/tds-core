import React from 'react'
import { shallow, render } from 'enzyme'

import { Success, SecurityHouse } from '@tds/core-decorative-icon'

import BenefitNoHeading from '../BenefitNoHeading'

describe('BenefitNoHeading', () => {
  const doShallow = (props = { Icon: Success }) =>
    shallow(
      <BenefitNoHeading {...props}>
        <BenefitNoHeading.Item>Some content</BenefitNoHeading.Item>
        <BenefitNoHeading.Item>Some other content</BenefitNoHeading.Item>
      </BenefitNoHeading>
    )

  it('renders with one icon set in the parent', () => {
    const benefit = render(
      <BenefitNoHeading Icon={Success}>
        <BenefitNoHeading.Item>Some content</BenefitNoHeading.Item>
        <BenefitNoHeading.Item>Some other content</BenefitNoHeading.Item>
      </BenefitNoHeading>
    )

    expect(benefit).toMatchSnapshot()
  })

  it('renders with icons set in each item', () => {
    const benefit = render(
      <BenefitNoHeading>
        <BenefitNoHeading.Item Icon={Success}>Some content</BenefitNoHeading.Item>
        <BenefitNoHeading.Item Icon={SecurityHouse}>Some other content</BenefitNoHeading.Item>
      </BenefitNoHeading>
    )

    expect(benefit).toMatchSnapshot()
  })

  it('renders an HTML ul tag', () => {
    const benefit = doShallow()

    expect(benefit.dive()).toHaveDisplayName('ul')
  })

  describe('BenefitNoHeading.Item', () => {
    it('renders an HTML li tag', () => {
      const benefitItem = shallow(
        <BenefitNoHeading.Item Icon={Success}>some content</BenefitNoHeading.Item>
      )

      expect(benefitItem.dive()).toHaveDisplayName('li')
    })

    it('receives Icons from the parent', () => {
      const benefitItem = shallow(
        <BenefitNoHeading Icon={Success}>
          <BenefitNoHeading.Item>Some content</BenefitNoHeading.Item>
        </BenefitNoHeading>
      )

      expect(benefitItem.find(BenefitNoHeading.Item).at(0)).toHaveProp('Icon', Success)
    })

    it('can override Icons received from parent', () => {
      const benefitItem = shallow(
        <BenefitNoHeading Icon={Success}>
          <BenefitNoHeading.Item Icon={SecurityHouse}>Some content</BenefitNoHeading.Item>
          <BenefitNoHeading.Item>Some other content</BenefitNoHeading.Item>
        </BenefitNoHeading>
      )

      expect(benefitItem.find(BenefitNoHeading.Item).at(0)).toHaveProp('Icon', SecurityHouse)
      expect(benefitItem.find(BenefitNoHeading.Item).at(1)).toHaveProp('Icon', Success)
    })
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
