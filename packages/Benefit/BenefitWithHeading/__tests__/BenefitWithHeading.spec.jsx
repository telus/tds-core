import React from 'react'
import { shallow, render } from 'enzyme'

import { Success, SecurityHouse } from '@tds/core-decorative-icon'

import BenefitWithHeading from '../BenefitWithHeading'

describe('BenefitWithHeading', () => {
  const doShallow = (props = { Icon: Success }) =>
    shallow(
      <BenefitWithHeading {...props}>
        <BenefitWithHeading.Item heading="Some heading">Some content</BenefitWithHeading.Item>
        <BenefitWithHeading.Item heading="Some other heading">
          Some other content
        </BenefitWithHeading.Item>
      </BenefitWithHeading>
    )

  it('renders with one icon set in the parent', () => {
    const benefit = render(
      <BenefitWithHeading Icon={Success}>
        <BenefitWithHeading.Item heading="Some heading">Some content</BenefitWithHeading.Item>
        <BenefitWithHeading.Item heading="Some other heading">
          Some other content
        </BenefitWithHeading.Item>
      </BenefitWithHeading>
    )

    expect(benefit).toMatchSnapshot()
  })

  it('renders with icons set in each item', () => {
    const benefit = render(
      <BenefitWithHeading>
        <BenefitWithHeading.Item heading="Some heading" Icon={Success}>
          Some content
        </BenefitWithHeading.Item>
        <BenefitWithHeading.Item heading="Some other heading" Icon={SecurityHouse}>
          Some other content
        </BenefitWithHeading.Item>
      </BenefitWithHeading>
    )

    expect(benefit).toMatchSnapshot()
  })

  it('renders an HTML ul tag', () => {
    const benefit = doShallow()

    expect(benefit.dive()).toHaveDisplayName('ul')
  })

  describe('BenefitWithHeading.Item', () => {
    it('renders an HTML li tag', () => {
      const benefitItem = shallow(
        <BenefitWithHeading.Item heading="Some heading" Icon={Success}>
          some content
        </BenefitWithHeading.Item>
      )

      expect(benefitItem.dive()).toHaveDisplayName('li')
    })

    it('receives Icons from the parent', () => {
      const benefitItem = shallow(
        <BenefitWithHeading Icon={Success}>
          <BenefitWithHeading.Item heading="Some heading">Some content</BenefitWithHeading.Item>
        </BenefitWithHeading>
      )

      expect(benefitItem.find(BenefitWithHeading.Item).at(0)).toHaveProp('Icon', Success)
    })

    it('can override Icons received from parent', () => {
      const benefitItem = shallow(
        <BenefitWithHeading Icon={Success}>
          <BenefitWithHeading.Item Icon={SecurityHouse} heading="Some heading">
            Some content
          </BenefitWithHeading.Item>
          <BenefitWithHeading.Item heading="Some other heading">
            Some other content
          </BenefitWithHeading.Item>
        </BenefitWithHeading>
      )

      expect(benefitItem.find(BenefitWithHeading.Item).at(0)).toHaveProp('Icon', SecurityHouse)
      expect(benefitItem.find(BenefitWithHeading.Item).at(1)).toHaveProp('Icon', Success)
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
