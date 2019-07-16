import React from 'react'
import { shallow, render } from 'enzyme'

import { Success, SecurityHouse } from '@tds/core-decorative-icon'

import BenefitNoHeading from '../BenefitNoHeading'

import { warn } from '../../../../shared/utils/warn'

jest.mock('../../../../shared/utils/warn')

describe('BenefitNoHeading', () => {
  const doShallow = (props = { icon: Success }) =>
    shallow(
      <BenefitNoHeading {...props}>
        <BenefitNoHeading.Item>Some content</BenefitNoHeading.Item>
        <BenefitNoHeading.Item>Some other content</BenefitNoHeading.Item>
      </BenefitNoHeading>
    )

  it('renders with one icon set in the parent', () => {
    const benefit = render(
      <BenefitNoHeading icon={Success}>
        <BenefitNoHeading.Item>Some content</BenefitNoHeading.Item>
        <BenefitNoHeading.Item>Some other content</BenefitNoHeading.Item>
      </BenefitNoHeading>
    )

    expect(benefit).toMatchSnapshot()
  })

  it('renders with icons set in each item', () => {
    const benefit = render(
      <BenefitNoHeading>
        <BenefitNoHeading.Item icon={Success}>Some content</BenefitNoHeading.Item>
        <BenefitNoHeading.Item icon={SecurityHouse}>Some other content</BenefitNoHeading.Item>
      </BenefitNoHeading>
    )

    expect(benefit).toMatchSnapshot()
  })

  it('renders an HTML ul tag', () => {
    const benefit = doShallow()

    expect(benefit.dive().props().tag).toEqual('ul')
  })

  describe('BenefitNoHeading.Item', () => {
    it('renders an HTML li tag', () => {
      const benefitItem = shallow(
        <BenefitNoHeading.Item icon={Success}>some content</BenefitNoHeading.Item>
      )

      expect(benefitItem.dive().props().tag).toEqual('li')
    })

    it('receives icons from the parent', () => {
      const benefitItem = shallow(
        <BenefitNoHeading icon={Success}>
          <BenefitNoHeading.Item>Some content</BenefitNoHeading.Item>
        </BenefitNoHeading>
      )

      expect(benefitItem.find(BenefitNoHeading.Item).at(0)).toHaveProp('icon', Success)
    })

    it('can override icons received from parent', () => {
      const benefitItem = shallow(
        <BenefitNoHeading icon={Success}>
          <BenefitNoHeading.Item icon={SecurityHouse}>Some content</BenefitNoHeading.Item>
          <BenefitNoHeading.Item>Some other content</BenefitNoHeading.Item>
        </BenefitNoHeading>
      )

      expect(benefitItem.find(BenefitNoHeading.Item).at(0)).toHaveProp('icon', SecurityHouse)
      expect(benefitItem.find(BenefitNoHeading.Item).at(1)).toHaveProp('icon', Success)
    })

    it('throws a warning when an icon is not set', () => {
      const benefitItem = shallow(
        <BenefitNoHeading.Item heading="some heading">some content</BenefitNoHeading.Item>
      )

      expect(benefitItem).not.toHaveProp('icon')
      expect(warn).toHaveBeenCalled()
      jest.clearAllMocks()
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
