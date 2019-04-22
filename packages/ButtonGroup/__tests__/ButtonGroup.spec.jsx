import React from 'react'
import { shallow, mount } from 'enzyme'

import A11yContent from '../../A11yContent'

import ButtonGroup from '../ButtonGroup'

describe('ButtonGroup', () => {
  const defaultProps = {
    name: 'storageSize',
    onChange: () => {
      return true
    },
    value: '64gb',
    label: 'Please select a storage size',
  }
  const doShallow = (props = {}) =>
    shallow(
      <ButtonGroup {...defaultProps} {...props}>
        <ButtonGroup.Item value="64gb">64 GB</ButtonGroup.Item>
        <ButtonGroup.Item value="128gb">128 GB</ButtonGroup.Item>
        <ButtonGroup.Item value="256gb">256 GB</ButtonGroup.Item>
      </ButtonGroup>
    )

  const doMount = (props = {}) =>
    mount(
      <ButtonGroup {...defaultProps} {...props}>
        <ButtonGroup.Item value="64gb">64 GB</ButtonGroup.Item>
        <ButtonGroup.Item value="128gb">128 GB</ButtonGroup.Item>
        <ButtonGroup.Item value="256gb">256 GB</ButtonGroup.Item>
      </ButtonGroup>
    )

  it('renders', () => {
    const buttonGroup = doMount()

    expect(buttonGroup).toMatchSnapshot()
  })

  it('selects the correct button', () => {
    const buttonGroup = doMount({ value: '128gb' })
    expect(
      buttonGroup
        .children()
        .find('input[value="128gb"]')
        .get(0).props.checked
    ).toEqual(true)
  })

  it('renders a group label', () => {
    const buttonGroup = doShallow()
    expect(buttonGroup.find('legend')).toExist()
  })

  it('passes additional attributes to the element', () => {
    const buttonGroup = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(buttonGroup).toHaveProp('id', 'the-id')
    expect(buttonGroup).toHaveProp('data-some-attr', 'some value')
  })

  describe('Accepts A11yContent', () => {
    it('connects to ButtonGroup.Item', () => {
      const buttonGroup = shallow(
        <ButtonGroup {...defaultProps}>
          <ButtonGroup.Item value="64gb">64 GB</ButtonGroup.Item>
          <ButtonGroup.Item value="512gb">
            512 GB
            <A11yContent>test</A11yContent>
          </ButtonGroup.Item>
        </ButtonGroup>
      )

      expect(buttonGroup).toContainReact(<A11yContent>test</A11yContent>)
    })
  })

  it('does not allow custom CSS', () => {
    const buttonGroup = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(buttonGroup).not.toHaveProp('className', 'my-custom-class')
    expect(buttonGroup).not.toHaveProp('style')
  })
})
