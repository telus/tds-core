import React from 'react'
import { mount, shallow } from 'enzyme'
import CounterButton from '../CounterButton'

describe('<CounterButton />', () => {
  it('has accessible text', () => {
    expect(
      shallow(<CounterButton label="Hello, World!" />)
        .find('button')
        .is('[aria-label="Hello, World!"]')
    ).toEqual(true)
  })

  it('renders a given icon', () => {
    expect(
      shallow(<CounterButton icon="foo" />)
        .find('.selector-counter__icon')
        .is('.icon.icon-core-foo')
    ).toEqual(true)
  })

  it('calls a given onClick handler', () => {
    const onChangeSpy = jest.fn()
    const wrapper = mount(<CounterButton onClick={onChangeSpy} />)
    const button = wrapper.find('button')

    expect(button.length).toEqual(1)
    button.simulate('click')
    expect(onChangeSpy.mock.calls.length).toEqual(1)
  })

  describe('disabled state', () => {
    it('adds the disabled attribute to <button />', () => {
      const button = shallow(<CounterButton disabled />).find('button')

      expect(button.length).toEqual(1)
      expect(button.is('[disabled]')).toEqual(true)
    })

    it('calls a given onClick handler', () => {
      const onChangeSpy = jest.fn()
      const wrapper = mount(<CounterButton onClick={onChangeSpy} disabled />)
      const button = wrapper.find('button')

      expect(button.length).toEqual(1)
      button.simulate('click')
      expect(onChangeSpy.mock.calls.length).toEqual(0)
    })
  })
})
