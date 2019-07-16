import React from 'react'
import { shallow, render, mount } from 'enzyme'

import { Success, SecurityHouse } from '@tds/core-decorative-icon'
import Heading from '@tds/core-heading'

import BenefitWithHeading from '../BenefitWithHeading'

import { warn } from '../../../../shared/utils/warn'

jest.mock('../../../../shared/utils/warn')

describe('BenefitWithHeading', () => {
  const doShallow = (props = { icon: Success }) =>
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
      <BenefitWithHeading icon={Success}>
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
        <BenefitWithHeading.Item heading="Some heading" icon={Success}>
          Some content
        </BenefitWithHeading.Item>
        <BenefitWithHeading.Item heading="Some other heading" icon={SecurityHouse}>
          Some other content
        </BenefitWithHeading.Item>
      </BenefitWithHeading>
    )

    expect(benefit).toMatchSnapshot()
  })

  it('renders an HTML ul tag', () => {
    const benefit = doShallow()

    expect(benefit.dive().props().tag).toEqual('ul')
  })

  it('has a heading level 4', () => {
    const benefit = mount(
      <BenefitWithHeading.Item heading="Some heading" icon={Success}>
        some content
      </BenefitWithHeading.Item>
    )

    expect(benefit).toContainReact(
      <Heading level="h4" tag="div">
        Some heading
      </Heading>
    )
  })

  describe('BenefitWithHeading.Item', () => {
    it('renders an HTML li tag', () => {
      const benefitItem = shallow(
        <BenefitWithHeading.Item heading="Some heading" icon={Success}>
          some content
        </BenefitWithHeading.Item>
      )

      expect(benefitItem.dive().props().tag).toEqual('li')
    })

    it('receives icons from the parent', () => {
      const benefitItem = shallow(
        <BenefitWithHeading icon={Success}>
          <BenefitWithHeading.Item heading="Some heading">Some content</BenefitWithHeading.Item>
        </BenefitWithHeading>
      )

      expect(benefitItem.find(BenefitWithHeading.Item).at(0)).toHaveProp('icon', Success)
    })

    it('can override icons received from parent', () => {
      const benefitItem = shallow(
        <BenefitWithHeading icon={Success}>
          <BenefitWithHeading.Item icon={SecurityHouse} heading="Some heading">
            Some content
          </BenefitWithHeading.Item>
          <BenefitWithHeading.Item heading="Some other heading">
            Some other content
          </BenefitWithHeading.Item>
        </BenefitWithHeading>
      )

      expect(benefitItem.find(BenefitWithHeading.Item).at(0)).toHaveProp('icon', SecurityHouse)
      expect(benefitItem.find(BenefitWithHeading.Item).at(1)).toHaveProp('icon', Success)
    })

    it('throws a warning when an icon is not set', () => {
      const benefitItem = shallow(
        <BenefitWithHeading.Item heading="some heading">some content</BenefitWithHeading.Item>
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
